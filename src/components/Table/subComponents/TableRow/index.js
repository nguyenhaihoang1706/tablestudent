import TableCell from "../TableCell";

function TableRow(props) {
  const { columns, data } = props;

  return (
    <>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {columns.map((column, colIndex) => (
            <TableCell
              key={colIndex}
              rowIndex={rowIndex}
              colIndex={colIndex}
              column={column}
              row={row}
            />
          ))}
        </tr>
      ))}
    </>
  );
}

export default TableRow;
