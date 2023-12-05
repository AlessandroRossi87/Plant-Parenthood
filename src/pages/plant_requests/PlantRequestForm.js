import React, { useState } from "react";
import { Button, Image, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

function PlantRequestForm({ plantRequest, isOwner, onApprove, onDeny, onCancelRequest }) {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const renderPlantRequest = (request) => (
    <div key={request.id} className="d-flex align-items-center justify-content-between p-2 border-bottom">
      <div className="d-flex align-items-center">
        <Image className="mr-2" src={request.plant.previewImage} rounded style={{ width: "50px", height: "50px" }} />
        <div>
          <p className="mb-0">{request.requester.username}</p>
        </div>
      </div>
      {isOwner ? (
        <div>
          <Button variant="success" className="mr-2" onClick={() => onApprove(request)}>
            Approve
          </Button>
          <Button variant="danger" onClick={() => onDeny(request)}>
            Deny
          </Button>
        </div>
      ) : (
        <Button variant="danger" onClick={() => onCancelRequest(request)}>
          Cancel request
        </Button>
      )}
    </div>
  );

  const renderPlantRequests = () => {
    const requestsToDisplay = showMore ? plantRequest : plantRequest.slice(0, 5);

    return requestsToDisplay.map((request) => renderPlantRequest(request));
  };

  return (
    <div className="mt-4">
      <h4>Plant Requests</h4>
      {plantRequest.length > 0 ? (
        <>
          {renderPlantRequests()}
          {plantRequest.length > 5 && (
            <ToggleButtonGroup type="checkbox" className="mt-3">
              <ToggleButton
                id="showMoreToggle"
                type="checkbox"
                variant="outline-primary"
                value={1}
                onChange={handleToggle}
              >
                {showMore ? "Show less" : "Show more"}
              </ToggleButton>
            </ToggleButtonGroup>
          )}
        </>
      ) : (
        <p>No plant requests found.</p>
      )}
    </div>
  );
}

export default PlantRequestForm;