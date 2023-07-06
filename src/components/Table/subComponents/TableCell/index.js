function TableCell(props) {
  const { column, row, colIndex, rowIndex } = props;
  const value = column.dataIndex ? row[column.dataIndex] : null;
  return (
    <td key={colIndex} style={{ width: column.width }}>
      {column.render ? column.render(row, value, rowIndex) : value}
    </td>
  );
}

export default TableCell;
