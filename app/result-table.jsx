import React from "react";
import {Table, Column, Cell} from 'fixed-data-table-2';
const rows = [
  "first row",
  "second row",
  "third row"
  // .... and more
];
const MyCustomCell = ({ mySpecialProp }) =>
  <Cell>
    {mySpecialProp === "column2" ? "I'm column 2" : "I'm not column 2"}
  </Cell>;
class ResultTable extends React.Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <div>
        <Table
        rowHeight={25}
        rowsCount={rows.length}
        width={600}
        maxHeight={400}
        headerHeight={25}>
        <Column
        header={<Cell>Col 1</Cell>}
        cell={<Cell>Column 1 static content</Cell>}
        width={100}
        height={30}
        />
        <Column
        header={<Cell>Col 2</Cell>}
        cell={<MyCustomCell mySpecialProp="column2" />}
        width={100}
        height={30}

        />
        </Table>
        </div>
    );
  }
}

export default ResultTable;
