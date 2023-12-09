import React, { useState, useEffect } from "react";
import { Button, Image, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";

function PlantRequestForm({ id, onApprove, onDeny, onCancelRequest }) {
  const [plantRequests, setPlantRequests] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    // Fetch or set the current user ID here
    const fetchCurrentUserId = async () => {
      // Example: Fetching current user ID from an API
      try {
        const response = await axiosReq.get("/get-current-user-id");
        setCurrentUserId(response.data.userId); // Adjust this line based on your API response
      } catch (error) {
        console.error("Error fetching current user ID:", error);
      }
    };

    fetchCurrentUserId();
  }, []); // Empty dependency array to ensure it runs only once on component mount

  const getCurrentUserId = () => {
    return currentUserId;
  };

  const renderPlantRequest = (request) => (
    <div key={request.id} className="d-flex align-items-center justify-content-between p-2 border-bottom">
      <div className="d-flex align-items-center">
        <Image className="mr-2" src={request.plant && request.plant.previewImage} rounded style={{ width: "50px", height: "50px" }} />
        <div>
          <p className="mb-0">{request.requester && request.requester.username}</p>
        </div>
      </div>
      {getCurrentUserId() === request.requester.id ? (
        // If the current user is the requester, show "Cancel Request" button
        <Button variant="danger" onClick={() => onCancelRequest(request)}>
          Cancel request
        </Button>
      ) : (
        // If the current user is not the requester, show "Approve" and "Deny" buttons
        <div>
          <Button variant="success" className="mr-2" onClick={() => onApprove(request)}>
            Approve
          </Button>
          <Button variant="danger" onClick={() => onDeny(request)}>
            Deny
          </Button>
        </div>
      )}
    </div>
  );

  // Function to render the plant requests
  const renderPlantRequests = () => {
    if (plantRequests.length === 0) {
      return <p>No plant requests found.</p>;
    }
    const requestsToDisplay = showMore ? plantRequests : plantRequests.slice(0, 5);

    return requestsToDisplay.map((request) => renderPlantRequest(request));
  };

  useEffect(() => {
    const fetchPlantRequests = async () => {
      try {
        console.log("Fetching plant requests for id:", id);
        if (id) {
          const response = await axiosReq.get(`/requests-list/${id}/`);
          console.log("Fetched plant requests:", response.data);
  
          if (Array.isArray(response.data.results)) {
            setPlantRequests(response.data.results);
          } else {
            console.error("Results array not found in fetched data:", response.data);
          }
        }
      } catch (error) {
        console.error("Error fetching plant requests:", error);
      }
    };
  
    fetchPlantRequests();
  }, [id]);

  return (
    <div className="mt-4">
      <h4>Plant Requests</h4>
      {renderPlantRequests()}
      {plantRequests.length > 5 && (
        <ToggleButtonGroup type="checkbox" className="mt-3">
          <ToggleButton
            id="showMoreToggle"
            type="checkbox"
            variant="outline-primary"
            value={1}
            onChange={() => setShowMore(!showMore)}
          >
            {showMore ? "Show less" : "Show more"}
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </div>
  );
}

export default PlantRequestForm;