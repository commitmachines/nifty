import React from "react";
import {Table, Column, Cell} from 'fixed-data-table-2';
const rows = [
  "first row",
  "second row",
  "third row"
  // .... and more
];

class ResultTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            { "key": "0", "key": "a", "label": "Yeah boi" },
            { "key": "1", "key": "b", "label": "Noob" }
        ];
        this.rows = [
            { "a": "asdsad", "b": "dsadsa"},
            { "a": "asdsad", "b": "dsadsa"},
            { "a": "asdsad", "b": "dsadsa"},
            { "a": "asdsad", "b": "dsadsa"}
        ]
    }
    onQueryResult(result) {
        console.log('!!! onQueryResult', result);
    }
    render() {
        var columns = [];
        for (var i = 0; i < this.columns.length; i++) {
            columns.push(
                <Column
                    header={<Cell>{this.columns[i].label}{i}</Cell>}
                    columnKey={this.columns[i]["key"]}
                    cell={({rowIndex, columnKey}) => (
                        <Cell>{this.rows[rowIndex][columnKey]}</Cell>
                    )}
                    width={100}
                    height={30}
                />
            );
        }
        return (
            <div>
                <Table
                    rowHeight={25}
                    rowsCount={this.rows.length}
                    width={600}
                    maxHeight={400}
                    data={this.rows}
                    headerHeight={25}>{columns}</Table>
            </div>
        );
    }
}

export default ResultTable;
