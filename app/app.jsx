import React from "react";
import ReactDom from "react-dom";
import { Window, Content, PaneGroup ,Pane, TabGroup, TabItem } from "react-photonkit";
import {FakeObjectDataListStore} from "./FakeObjectDataListStore.js";
import Header from "./header.jsx"
import Footer from "./footer.jsx";
import Sidebar from "./sidebar.jsx"
import ResultTable from "./result-table.jsx"
import TextEditor from "./TextEditor.jsx"

import flex from 'react-flex-layout';
import 'fixed-data-table-2/dist/fixed-data-table.css';

require('../index.scss');
import {Table, Column, Cell} from 'fixed-data-table-2';

var tabItems = [];
tabItems.push(
  <TabItem title="index.sql" eventKey="1" active={true}></TabItem>
);
tabItems.push(
  <TabItem title="deposit.sql" eventKey="2" active={false}></TabItem>
);
var onTabSelect = function(eventKey) {
  var fileName = '/Users/rikard.javelind/git/trustly/schema/index.sql';
  if (eventKey == "2") {
  fileName = '/Users/rikard.javelind/git/trustly/schema/public/functions/deposit.sql';
  }
  fs.readFile(fileName, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    globalEditor.setValue(data, -1);
  });
};
var activeKey = "2";
const rows = [
  "first row",
  "second row",
  "third row"
  // .... and more
];

// Custom cell implementation with special prop
const MyCustomCell = ({ mySpecialProp }) =>
  <Cell>
    {mySpecialProp === "column2" ? "I'm column 2" : "I'm not column 2"}
  </Cell>;

ReactDom.render(
  <Window>
    <Header />
    <TabGroup onSelect={onTabSelect} activeKey={activeKey} children={tabItems}>
    </TabGroup>
    <Content class="no-select">
      <PaneGroup>
        <Sidebar />
       <flex.Layout>
          <flex.Layout layoutHeight={500}>
          <Pane className="best-wrapper">
            <TextEditor></TextEditor>
        </Pane>
          </flex.Layout>
          <flex.LayoutSplitter vertical/>
          <flex.Layout layoutHeight='flex'>
            <ResultTable />
          </flex.Layout>
        </flex.Layout>
      </PaneGroup>
    </Content>
    <Footer />
  </Window>
  , document.querySelector("#main"));
