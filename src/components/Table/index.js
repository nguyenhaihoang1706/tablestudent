import TableRow from "./subComponents/TableRow";
import TableHeader from "./subComponents/TableHeader";
import "./style.css";
import { useEffect } from "react";

function Table(props) {
  const { column, data, handleSorting } = props;
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <table>
      <thead>
        <TableHeader column={column} handleSorting={handleSorting} />
      </thead>
      <tbody>
        <TableRow column={column} data={data} />
      </tbody>
    </table>
  );
}

export default Table;
