import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";  // Import axios or use your axios instance
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import useRedirect from "../../hooks/useRedirect";

const PlantRequestForm = () => {
  useRedirect("loggedout");
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const fetchPlantRequests = async () => {
      try {
        const response = await axios.get("/plant-requests/");
        setRequests(response.data);
      } catch (err) {
        setError(err.response?.data);
      }
    };

    fetchPlantRequests();
  }, []);

  const handleApprove = async (requestId) => {
    try {
      await axios.patch(`/plant-requests/${requestId}/approve/`);
      const response = await axios.get("/plant-requests/");
      setRequests(response.data);
    } catch (err) {
      setError(err.response?.data);
    }
  };

  const handleDeny = async (requestId) => {
    try {
      await axios.patch(`/plant-requests/${requestId}/deny/`);
      const response = await axios.get("/plant-requests/");
      setRequests(response.data);
    } catch (err) {
      setError(err.response?.data);
    }
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Requester</th>
            <th>Plant</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.requester.username}</td>
              <td>{request.plant.title}</td>
              <td>{request.request_date}</td>
              <td>{request.is_approved ? "Approved" : "Pending"}</td>
              <td>
                {!request.is_approved && (
                  <>
                    <Button
                      className={btnStyles.Button}
                      onClick={() => handleApprove(request.id)}
                    >
                      Approve
                    </Button>
                    <Button
                      className={btnStyles.Button}
                      onClick={() => handleDeny(request.id)}
                    >
                      Deny
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {error && <Alert variant="danger">{error}</Alert>}

      <Button className={btnStyles.Button} onClick={() => history.goBack()}>
        Back
      </Button>
    </Container>
  );
};

export default PlantRequestForm;