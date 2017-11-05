import React from "react";
import ReactDom from "react-dom";
import { Window, Content, PaneGroup ,Pane } from "react-photonkit";
import Header from "./header.jsx"
import Footer from "./footer.jsx";
import Sidebar from "./sidebar.jsx"
import ResultTable from "./ResultTable.jsx"
import TextEditor from "./TextEditor.jsx"
import Tabs from "./Tabs.jsx"
import flex from 'react-flex-layout';
import 'fixed-data-table-2/dist/fixed-data-table.css';
import {Table, Column, Cell} from 'fixed-data-table-2';
require('../index.scss');

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "tabs": [
                { "label": "index.sql", "path": "/Users/rikard.javelind/git/trustly/schema/index.sql", "active": true },
                { "label": "deposit.sql", "path": "/Users/rikard.javelind/git/trustly/schema/public/functions/deposit.sql", "active": false }
            ],
            "editor": null
        }
        this.onEditorLoad = this.onEditorLoad.bind(this);
        this.onQueryResult = this.onQueryResult.bind(this);
    }

    onEditorLoad(editor) {
        this.setState({
            editor: editor
        });
        this.foo.onEditorLoad(editor);
    }
    onQueryResult(result) {
        this.foo.onQueryResult(result);
    }
    onFlexResize() {
        this.state.editor.resize(true);
    }
    render() {
        return (
            <Window>
                <Header />
                <Tabs ref={(foo) => { this.foo = foo; }} editor={this.state.editor} tabs={this.state.tabs} />
                <Content class="no-select">
                    <PaneGroup>
                        <Sidebar />
                        <flex.Layout>
                            <flex.Layout layoutHeight={500}>
                                <Pane className="best-wrapper">
                                    <TextEditor onQueryResult={this.onQueryResult} onLoad={this.onEditorLoad}></TextEditor>
                                </Pane>
                            </flex.Layout>
                            <flex.LayoutSplitter onResizing={this.onFlexResize} onResizeComplete={this.onFlexResize} vertical/>
                            <flex.Layout layoutHeight='flex'>
                                <ResultTable ref={(foo) => { this.foo = foo; }} />
                            </flex.Layout>
                        </flex.Layout>
                    </PaneGroup>
                </Content>
                <Footer />
            </Window>
        );
    }
}

export default Main;
