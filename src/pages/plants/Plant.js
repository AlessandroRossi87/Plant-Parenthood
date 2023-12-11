import React from "react";
import styles from "../../styles/Plant.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes, axiosReq } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Plant = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    hydrate_count,
    moist_count,
    dry_count,
    title,
    description,
    plant_request_id,
    plant_children,
    taxonomy_choices,
    image,
    updated_at,
    plantPage,
    setPlants,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/plants/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/plants/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const [reactionClicked, setReactionClicked] = React.useState(false);

  const handleHydrate = async () => {
    if (!reactionClicked) {
      try {
        const { data } = await axiosRes.post("/reactions/", { plant: id, reaction_type: 1 });
        setPlants((prevPlants) => ({
          ...prevPlants,
          results: prevPlants.results.map((plant) => {
            return plant.id === id
              ? { ...plant, hydrate_count: plant.hydrate_count + 1, reactions_id: data.id }
              : plant;
          }),
        }));
        setReactionClicked(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleMoist = async () => {
    try {
      const { data } = await axiosRes.post("/reactions/", { plant: id, reaction_type: 2 });
      setPlants((prevPlants) => ({
        ...prevPlants,
        results: prevPlants.results.map((plant) => {
          return plant.id === id
            ? { ...plant, moist_count: plant.moist_count + 1, reactions_id: data.id }
            : plant;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDry = async () => {
    try {
      const { data } = await axiosRes.post("/reactions/", { plant: id, reaction_type: 3 });
      setPlants((prevPlants) => ({
        ...prevPlants,
        results: prevPlants.results.map((plant) => {
          return plant.id === id
            ? { ...plant, dry_count: plant.dry_count + 1, reactions_id: data.id }
            : plant;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handlePlantRequest = async () => {
    try {
      console.log('icurrentUser:', currentUser);
      const requestData = {
        plant: id,
        requester: currentUser.profile_id,
        request_date: new Date().toISOString(),
        is_approved: false,
      };

      console.log('Request Data:', requestData);
      console.log('Axios Request Config:', axiosReq.post);

      const response = await axiosReq.post(`/plants/${id}/request/`, requestData);
      const newPlantRequest = response.data;
  
      console.log('Plant request created successfully:', newPlantRequest);
    } catch (error) {
      console.error('Error creating plant request:', error.response.data);
    }
  };

  return (
    <Card className={styles.Plant}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && plantPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/plants/${id}`}>
        <Card.Img src={`https://res.cloudinary.com/dg6tnws5o/${image}`} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        {taxonomy_choices && <Card.Text>{taxonomy_choices}</Card.Text>}
        <div className={styles.PlantBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't hydrate your own plant!</Tooltip>}
            >
              <i className="fa-solid fa-shower" />
            </OverlayTrigger>
          ) : currentUser ? (
            <span onClick={handleHydrate}>
              <i className={`fa-solid fa-shower ${styles.HydrateOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to hydrate plants!</Tooltip>}
            >
              <i className="fa-solid fa-shower" />
            </OverlayTrigger>
          )}
          {hydrate_count}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't moist your own plant!</Tooltip>}
            >
              <i className="fa-solid fa-faucet-drip" />
            </OverlayTrigger>
          ) : currentUser ? (
            <span onClick={handleMoist}>
              <i className={`fa-solid fa-faucet-drip ${styles.MoistOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to moist plants!</Tooltip>}
            >
              <i className="fa-solid fa-faucet-drip" />
            </OverlayTrigger>
          )}
          {moist_count}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't dry your own plant!</Tooltip>}
            >
              <i className="fa-solid fa-sun-plant-wilt" />
            </OverlayTrigger>
          ) : currentUser ? (
            <span onClick={handleDry}>
              <i className={`fa-solid fa-sun-plant-wilt ${styles.DryOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to dry plants!</Tooltip>}
            >
              <i className="fa-solid fa-sun-plant-wilt" />
            </OverlayTrigger>
          )}
          {dry_count}
        </div>
        <div>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't request your own plant!</Tooltip>}
            >
              <i className="fa-solid fa-seedling" />
            </OverlayTrigger>
          ) : plant_request_id ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Plant request already sent!</Tooltip>}
            >
              <i className="fa-solid fa-seedling" />
            </OverlayTrigger>
          ) : currentUser ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Click to request a plant child!</Tooltip>}
            >
              <span onClick={handlePlantRequest}>
                <i className="fa-solid fa-seedling" />
              </span>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to request plants!</Tooltip>}
            >
              <i className="fa-solid fa-seedling" />
            </OverlayTrigger>
          )}
          {plant_children}
          <Link to={`/plants/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Plant;