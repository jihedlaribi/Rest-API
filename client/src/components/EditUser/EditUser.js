import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { editUser, getUser } from '../../userAction/userAction';

const EditUser = ({user}) => {
    const [fullName, setFullName] = useState(user.fullName);
    const [email, setEmail] =useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
      edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
          type="submit"
            variant="primary"
            onClick={() => {
              dispatch(editUser(user._id, fullName,email, phone ));
              dispatch(getUser());
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
        </div>
    )
}

export default EditUser
