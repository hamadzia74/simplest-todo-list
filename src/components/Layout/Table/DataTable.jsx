import { Table } from "antd";
import PropTypes from "prop-types";

export default function DataTable(props) {
  const {
    style,
    columns,
    dataSource,
    pagination,
    expandable,
    scroll,
    className,
    showHeader,
    striped,
    rowSelection,
  } = props;

  return (
    <Table
      rowClassName={(record, index) =>
        striped !== false && index % 2 === 0
          ? "table-row-dark"
          : "table-row-light"
      }
      showHeader={showHeader}
      className={`antd-custom-card-table ${className}`}
      style={style}
      columns={columns}
      dataSource={dataSource}
      pagination={pagination}
      scroll={scroll}
      expandable={expandable}
      rowSelection={rowSelection}

    />
  );
}
DataTable.propTypes = {
  style: PropTypes.node.isRequired,
  columns: PropTypes.node.isRequired,
  dataSource: PropTypes.node.isRequired,
  pagination: PropTypes.node.isRequired,
  scroll: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
  expandable: PropTypes.node.isRequired,
  showHeader: PropTypes.node.isRequired,
  striped: PropTypes.node.isRequired,
  rowSelection: PropTypes.node.isRequired,
};
