import TableCell from "../TableCell";

function TableRow(props) {
  const { column, data } = props;
  return (
    <>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {column.map((col, colIndex) => (
            <TableCell
              rowIndex={rowIndex}
              colIndex={colIndex}
              col={col}
              row={row}
            />
          ))}
        </tr>
      ))}
    </>
  );
}

export default TableRow;
