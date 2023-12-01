import React from "react";
import styles from "../../styles/Plant.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Plant = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    reactions_id,
    hydrate_count,
    moist_count,
    dry_count,
    title,
    content,
    taxonomy_choices,
    image,
    updated_at,
    plantPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
            {is_owner && plantPage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/plants/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        {taxonomy_choices && <Card.Text>{taxonomy_choices}</Card.Text>}
        <div className={styles.PlantBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't hydrate to your own plant!</Tooltip>}
            >
              <i className="fa-solid fa-shower" />
            </OverlayTrigger>
          ) : reactions_id ? (
            <span onClick={() => {}}>
              <i className={`fa-solid fa-shower ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`fa-solid fa-shower ${styles.HeartOutline}`} />
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
          ) : reactions_id ? (
            <span onClick={() => {}}>
              <i className={`fa-solid fa-faucet-drip ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`fa-solid fa-faucet-drip ${styles.HeartOutline}`} />
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
          ) : reactions_id ? (
            <span onClick={() => {}}>
              <i className={`fa-solid fa-sun-plant-wilt ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`fa-solid fa-sun-plant-wilt ${styles.HeartOutline}`} />
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
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Plant;