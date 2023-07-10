import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect, useState } from "react";

import { toast } from "react-toastify";
function UpdateStudent(props) {
  const { onUpdate, row } = props;
  const [show, setShow] = useState(false);
  const [student, setStudent] = useState(row);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: name === "sex" ? parseInt(value) : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(student);
    handleClose();
    toast.warning("Warning");
  };

  useEffect(() => {}, [row]);
  return (
    <>
      <Button
        variant="warning"
        onClick={handleShow}
        style={{ textAlign: "right" }}
      >
        Sửa
      </Button>
      <Form onSubmit={handleSubmit}>
        <Modal show={show} size="lg" onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update học sinh mới</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="form.fullName">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control
                  defaultValue={student && student.fullName}
                  type="text"
                  onChange={handleInputChange}
                  placeholder="Nhập họ và tên"
                  name="fullName"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="form.id">
                <Form.Label>Mã học sinh</Form.Label>
                <Form.Control
                  defaultValue={student && student.id}
                  type="text"
                  onChange={handleInputChange}
                  placeholder="Nhập mã học sinh"
                  name="id"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="form.age">
                <Form.Label>Tuổi</Form.Label>
                <Form.Control
                  defaultValue={student && student.age}
                  type="number"
                  onChange={handleInputChange}
                  placeholder="Nhập tuổi"
                  name="age"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="form.sex">
                <Form.Label>Giới tính</Form.Label>
                <Form.Select
                  defaultValue={student && student.sex}
                  aria-label="Chọn giới tính"
                  required
                  name="sex"
                >
                  <option value={1}>Nữ</option>
                  <option value={0}>Nam</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="form.address">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                value={student && student.address}
                type="text"
                placeholder="Nhập địa chỉ"
                onChange={handleInputChange}
                name="address"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Huỷ
            </Button>
            <Button variant="warning" onClick={handleSubmit}>
              Sửa
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
}

export default UpdateStudent;
