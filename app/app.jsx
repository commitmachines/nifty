import React from "react";
import ReactDom from "react-dom";
import { Window, Content, PaneGroup ,Pane } from "react-photonkit";

import Header from "./header.jsx"
import Footer from "./footer.jsx";
import Sidebar from "./sidebar.jsx"

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/mode/pgsql';
import 'brace/theme/github';
import 'brace/theme/monokai';

require('../index.scss');
const fs = require('fs');

function onLoad(editor) {
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
ReactDom.render(
  <Window>
    <Header />
    <Content>
      <PaneGroup>
        <Sidebar />
        <Pane className="best-wrapper">
        <AceEditor
        mode="pgsql"
        fontSize="25"
        onLoad={onLoad}
        theme="textmate"
        name="best"
        editorProps={{$blockScrolling: true}} />
        </Pane>
      </PaneGroup>
    </Content>
    <Footer />
  </Window>
  , document.querySelector("#main"));
