import TableRow from "./subComponents/TableRow";
import TableHeader from "./subComponents/TableHeader";
import "./style.css";
import { useEffect } from "react";

function Table(props) {
  const { columns, data, handleSorting, handleUpdate } = props;
  useEffect(() => {}, [columns, data]);
  return (
    <table>
      <thead>
        <TableHeader columns={columns} handleSorting={handleSorting} />
      </thead>
      <tbody>
        <TableRow columns={columns} data={data} handleUpdate={handleUpdate} />
      </tbody>
    </table>
  );
}

export default Table;
