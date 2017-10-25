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

ReactDom.render(
  <Window>
    <Header />
    <Content>
      <PaneGroup>
        <Sidebar />
        <Pane className="best-wrapper">
        <AceEditor
        mode="pgsql"
        theme="monokai"
        name="best"
        editorProps={{$blockScrolling: true}} />
        </Pane>
      </PaneGroup>
    </Content>
    <Footer />
  </Window>
  , document.querySelector("#main"));
