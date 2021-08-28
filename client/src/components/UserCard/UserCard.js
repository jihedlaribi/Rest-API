import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser, getUser } from "../../userAction/userAction";

import EditUser from "../EditUser/EditUser";
import "./UserCard.css";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteUser(user._id));
    dispatch(getUser());
  };
  return (
    <div className="card">
      <Card style={{ width: "20rem", marginTop: "20px" }}>
        <Card.Body>
          <Card.Title>FullName:{user.fullName}</Card.Title>
          <Card.Text>
            <p>Email:{user.email}</p>
            <p>Phone:{user.phone}</p>
          </Card.Text>
          <Button variant="primary" onClick={handleDelete}>
            delete
          </Button>
          <EditUser user={user} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
