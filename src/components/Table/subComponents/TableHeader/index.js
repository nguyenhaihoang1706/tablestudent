import { useEffect, useState } from "react";

function TableHeader(props) {
  const [column, handleSorting] = props;
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");
  const handleSortingChange = (accessor) => {
    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <tr>
      {column.map((col, index) => {
        return (
          <th
            style={{ width: col.width }}
            key={index}
            onClick={
              col.sortable ? () => handleSortingChange(col.dataIndex) : null
            }
          >
            {col.title}
          </th>
        );
      })}
    </tr>
  );
}

export default TableHeader;
