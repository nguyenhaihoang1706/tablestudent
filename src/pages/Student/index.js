import AddStudent from "./SubComponent/AddStudent";
import UpdateStudent from "./SubComponent/UpdateStudent";
import DeleteStudent from "./SubComponent/DeleteStudent";
import { useState, useContext, useEffect } from "react";

import Table from "../../components/Table";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ThemeContext from "../../context/theme";

import { Row, Form } from "react-bootstrap";

import "./style.css";

const defaultData = [
  {
    id: "std1",
    fullName: "Nguyen Van A",
    address: "Hai Thuong Lang Ong",
    age: 20,
    sex: 1,
  },
  {
    id: "std2",
    fullName: "Nguyen Van B",
    age: 18,
    address: "Hai Thuong Lang Ong",
    sex: 0,
  },
  {
    id: "std3",
    fullName: "Nguyen Van C",
    age: 18,
    address: "Hai Thuong Lang Ong",
    sex: 1,
  },
  {
    id: "std4",
    fullName: "Nguyen Van D",
    age: 17,
    address: "Hai Thuong Lang Ong",
    sex: 1,
  },
  {
    id: "std1",
    fullName: "Nguyen Van A",
    address: "Hai Thuong Lang Ong",
    age: 20,
    sex: 1,
  },
  {
    id: "std2",
    fullName: "Nguyen Van B",
    age: 18,
    address: "Hai Thuong Lang Ong",
    sex: 0,
  },
  {
    id: "std3",
    fullName: "Nguyen Van C",
    age: 18,
    address: "Hai Thuong Lang Ong",
    sex: 1,
  },
  {
    id: "std4",
    fullName: "Nguyen Van D",
    age: 17,
    address: "Hai Thuong Lang Ong",
    sex: 1,
  },
  {
    id: "std1",
    fullName: "Nguyen Van A",
    address: "Hai Thuong Lang Ong",
    age: 20,
    sex: 1,
  },
  {
    id: "std2",
    fullName: "Nguyen Van B",
    age: 18,
    address: "Hai Thuong Lang Ong",
    sex: 0,
  },
  {
    id: "std3",
    fullName: "Nguyen Van C",
    age: 18,
    address: "Hai Thuong Lang Ong",
    sex: 1,
  },
  {
    id: "std4",
    fullName: "Nguyen Van D",
    age: 17,
    address: "Hai Thuong Lang Ong",
    sex: 1,
  },
];

function Student() {
  const [students, setStudent] = useState(defaultData);

  const themeCtx = useContext(ThemeContext);

  const [isScroll, setIsScroll] = useState(false);

  const columns = [
    {
      title: "STT",
      width: 50,
      render: (row, value, index) => {
        return index + 1;
      },
    },
    {
      title: "Họ và Tên",
      dataIndex: "fullName",
      width: 200,
      sortable: true,
      render: (_, value) => {
        return <b>{value}</b>;
      },
    },
    {
      title: "Mã học sinh",
      dataIndex: "id",
      width: 200,
      sortable: true,
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      width: 100,
      sortable: true,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      width: 400,
      sortable: true,
    },
    {
      title: "Giới tính",
      dataIndex: "sex",
      width: 100,
      sortable: true,
      render: (_, value) => {
        let sexStr = null,
          color = null;
        if (value === 1) {
          sexStr = "Nữ";
          color = "green";
        } else {
          sexStr = "Nam";
          color = "blue";
        }
        return <div style={{ color }}>{sexStr}</div>;
      },
    },
    {
      title: "Thao tác",
      width: 200,
      sortable: false,
      render: (row, _) => {
        return [
          <DeleteStudent onDelete={handleDeleteStudent} row={row} />,
          <></>,
          <UpdateStudent onUpdate={handleUpdateStudent} row={row} />,
        ];
      },
    },
  ];
  const handleDeleteStudent = (id) => {
    const deteleStudent = [...students].filter((std) => std.id !== id);
    setStudent(deteleStudent);
  };

  const handleUpdateStudent = (student) => {
    const updateStudent = [...students].map((std) =>
      std.id === student.id ? student : std
    );
    setStudent(updateStudent);
  };

  const handleAddStudent = (student) => {
    const newStudent = { ...student, id: uuidv4() };
    setStudent([...students, newStudent]);
  };

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...students].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "vi", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setStudent(sorted);
    }
  };

  const handleThemeChange = (event) => {
    themeCtx.setTheme(event.target.value);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.screenY) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`container-fluid ${themeCtx.theme === "dark" && "dark"}`}
      style={{ paddingTop: 20 }}
    >
      <h2>Quản lý học sinh</h2>
      <AddStudent onAdd={handleAddStudent} />
      <Row style={{ marginBottom: 10, float: "left" }}>
        <Form.Group controlId="form.theme">
          <Form.Select
            defaultValue={themeCtx.theme}
            aria-label="Chọn theme"
            onChange={handleThemeChange}
            required
          >
            <option value={"dark"}>Dark Mode</option>
            <option value={"light"}>Light Mode</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Table columns={columns} data={students} handleSorting={handleSorting} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isScroll && (
        <button className="backToTopBtn" onClick={handleBackToTop}>
          &#8593;
        </button>
      )}
    </div>
  );
}

export default Student;
