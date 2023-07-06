import { useState } from "react";

function TableHeader(props) {
  const { columns, handleSorting } = props;
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <tr>
      {columns.map((column, index) => {
        return (
          <th
            style={{ width: column.width }}
            key={index}
            onClick={
              column.sortable
                ? () => handleSortingChange(column.dataIndex)
                : null
            }
          >
            {column.title}
          </th>
        );
      })}
    </tr>
  );
}

export default TableHeader;
