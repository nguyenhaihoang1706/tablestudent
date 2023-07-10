import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { toast } from "react-toastify";

function DeleteStudent(props) {
  const { onDelete, row } = props;
  const [show, setShow] = useState(false);
  const [student] = useState(row);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    onDelete(student.id);
    handleClose();
    toast.error("Delele");
  };
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Xoá
      </Button>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xoá Học Sinh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc chắn xoá học sinh không {student && student.fullName}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Huỷ
          </Button>
          <Button variant="danger" type="submit" onClick={handleSubmit}>
            Xoá
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteStudent;
