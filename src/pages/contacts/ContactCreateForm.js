import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import useRedirect from "../../hooks/useRedirect";

const ContactCreateForm = () => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [contactData, setContactData] = useState({
    reason: "",
    content: "",
  });
  const { reason, content } = contactData;

  const history = useHistory();

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("reason", reason);
    formData.append("content", content);

    try {
      await axiosReq.post("/contact/", formData);
      history.goBack();
    } catch (err) {
      if (err.response?.status !== 401) {
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
          name="reason"
          value={reason}
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
    </Container>
  );
};

export default ContactCreateForm;