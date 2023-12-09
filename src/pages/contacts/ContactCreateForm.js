import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import useRedirect from "../../hooks/useRedirect";

const ContactCreateForm = () => {
  const ownerId = parseInt(profile.id);
  const [errors, setErrors] = useState({});

  const [contactData, setContactData] = useState({
    subject: "",
    content: "",
  });
  const { subject, content } = contactData;

  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
  
    formData.append("subject", subject);
    formData.append("content", content);
    formData.append("owner", ownerId);
  
    console.log("Form Data:", Object.fromEntries(formData));
  
    try {
      const response = await axiosReq.post("/contact/", formData);
      console.log("Server Response:", response);
      history.goBack();
      handleShow();
    } catch (err) {
      console.error("Error:", err);
      if (err.response?.status !== 401) {
        console.error("Server Error Details:", err.response?.data);
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value={subject}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button className={btnStyles.Button} onClick={() => history.goBack()}>
        Cancel
      </Button>
      <Button className={btnStyles.Button} type="submit">
        Send
      </Button>
    </div>
  ); 

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Container className={appStyles.Content}>{textFields}</Container>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your message will be reviewed soon!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className={btnStyles.Button} onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ContactCreateForm;