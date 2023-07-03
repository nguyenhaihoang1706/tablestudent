function TableCell(props) {
  const { col, row, colIndex, rowIndex } = props;
  const value = col.dataIndex ? row[col.dataIndex] : null;
  return (
    <td key={colIndex} style={{ width: col.width }}>
      {col.render ? col.render(row, value, rowIndex) : value}
    </td>
  );
}

export default TableCell;
