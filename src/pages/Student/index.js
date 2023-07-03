import AddStudent from "./SubComponent/AddStudent";
import { useState, useEffect } from "react";
import Table from "../../components/Table";
import { Button } from "react-bootstrap";

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
];

function Student(props) {
  const [students, setStudent] = useState(defaultData);

  const column = [
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
          <Button variant="danger">Xoá</Button>,
          <></>,
          <Button variant="warning">Sửa</Button>,
        ];
      },
    },
  ];

  const handleAddStudent = (student) => {
    setStudent([...students, student]);
  };

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...students].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localCompare(b[sortField].toString(), "vi", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setStudent(sorted);
    }
  };

  useEffect(() => {
    console.log(students);
  }, []);
  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <h2>Quản lý học sinh</h2>
      <AddStudent onAdd={handleAddStudent} />
      <Button
        variant="primary"
        style={{
          textAlign: "right",
          float: "right",
          marginBottom: 30,
          marginRight: 5,
        }}
      >
        Sắp xếp
      </Button>
      <br />
      <Table column={column} data={students} handleSorting={handleSorting} />
    </div>
  );
}

export default Student;
