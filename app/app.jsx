import React from "react";
import ReactDom from "react-dom";
import { Window, Content, PaneGroup ,Pane, TabGroup, TabItem } from "react-photonkit";

import Header from "./header.jsx"
import Footer from "./footer.jsx";
import Sidebar from "./sidebar.jsx"

import brace from 'brace';
import AceEditor from 'react-ace';

import flex from 'react-flex-layout';



import 'brace/mode/java';
import 'brace/mode/pgsql';
import 'brace/theme/github';
import 'brace/theme/monokai';

require('../index.scss');
const fs = require('fs');

var globalEditor = null;
function onLoad(editor) {
  globalEditor = editor;
  editor.setValue('hejsan', -1);
  fs.readFile('/Users/d/src/schema/index.sql', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    editor.setValue(data, -1);
    editor.setOptions({
  fontFamily: "Menlo",
  fontSize: "11pt"
});
  });
  console.log('fs', fs);
}
var onFlexResize = function() {
  console.log('resize');
  globalEditor.resize(true);
}
var tabItems = [];
tabItems.push(
  <TabItem title="lol" eventKey="1" active={true}></TabItem>
);
tabItems.push(
  <TabItem title="lolzors" eventKey="2" active={false}></TabItem>
);
var onTabSelect = function(eventKey) {
  var fileName = '/Users/d/src/schema/index.sql';
  if (eventKey == "2") {
  fileName = '/Users/d/src/schema/public/functions/deposit.sql';
  }
  fs.readFile(fileName, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    globalEditor.setValue(data, -1);
  });
};
var activeKey = "2";
ReactDom.render(
  <Window>
    <Header />
    <TabGroup onSelect={onTabSelect} activeKey={activeKey} children={tabItems}>
    </TabGroup>
    <Content>
      <PaneGroup>
        <Sidebar />
       <flex.Layout>
          <flex.Layout layoutHeight={300}>
          <Pane className="best-wrapper">
          <AceEditor
          mode="pgsql"
          fontSize="25"
          onLoad={onLoad}
          theme="textmate"
          name="best"
          editorProps={{$blockScrolling: true}} />
        </Pane>
          </flex.Layout>
          <flex.LayoutSplitter onResizing={onFlexResize} onResizeComplete={onFlexResize} vertical/>
          <flex.Layout layoutHeight='flex'>Column2</flex.Layout>
        </flex.Layout>
      </PaneGroup>
    </Content>
    <Footer />
  </Window>
  , document.querySelector("#main"));
