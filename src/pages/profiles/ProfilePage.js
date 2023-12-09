import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { axiosRes, axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Plant from "../plants/Plant";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import PlantRequestForm from "../plant_requests/PlantRequestForm";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePlants, setProfilePlants] = useState({ results: [] });
  const [plantRequests, setPlantRequests] = useState([]);

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  const history = useHistory()

  const handleApprove = async () => {
    try {
      await axiosRes.post(`/plant-requests/${id}/approve`);
      console.log('Request approved:')
    } catch (err) {
      console.log(err)
    }
  };

  const handleDeny = async () => {
    try {
      await axiosRes.post(`/plant-requests/${id}/deny`);
      console.log('Request denied:')
    } catch (err) {
      console.log(err)
    }
  };

  const handleCancelRequest = async () => {
    try {
      await axiosRes.delete(`/plants/${id}/request`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePlants }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/plants/?owner__profile=${id}`),
        ]);
        const { data: fetchedPlantRequests } = 
          await axiosReq.get(`/plants/?plant=${id}/request/`);

        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePlants(profilePlants);
        setPlantRequests(fetchedPlantRequests.results);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.plants_count}</div>
              <div>plants</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                onClick={() => handleFollow(profile)}
              >
                follow
              </Button>
            ))}
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
      <PlantRequestForm
        // id={currentUser?.profile_id}
        // isOwner={is_owner}
        // onApprove={handleApprove}
        // onDeny={handleDeny}
        // onCancelRequest={handleCancelRequest}
      />
    </>
  );

  const mainProfilePlants = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s plants</p>
      <hr />
      {profilePlants.results.length ? (
        <InfiniteScroll
          children={profilePlants.results.map((plant) => (
            <Plant key={plant.id} {...plant} setPlants={setProfilePlants} />
          ))}
          dataLength={profilePlants.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePlants.next}
          next={() => fetchMoreData(profilePlants, setProfilePlants)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted any plants yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePlants}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;