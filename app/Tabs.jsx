import React from "react";
import { TabGroup, TabItem } from "react-photonkit";
import GlobalEvents from 'react-global-events'

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: 0,
            number: 0
        }
        this.state.editor = this.props.editor;
        GlobalEvents.subscribe(this, 'onEditorLoad');

        this.onTabSelect = this.onTabSelect.bind(this);
    }
    increment() {
        this.setState({
            active: "6"
        });
    }
    componentWillReceiveProps() {
        console.log('ne wprops!', this.props);
    }
    onEditorLoad(editor) {
        this.state.editor = editor;
        this.onTabSelect(0);
    }

    onTabSelect(eventKey) {
        var editor = this.state.editor;
        var path = this.props.tabs[parseInt(eventKey)].path;

        this.loadFile(editor, path);
    };

    loadFile(editor, path) {
        require('fs').readFile(path, 'utf8', function (err, data) {
            if (err) return console.log(err);
            editor.setValue(data, -1);
        });
    }

    render() {
        var tabItems = [];
        for (var i = 0; i < this.props.tabs.length; i++) {
            var tab = this.props.tabs[i];
            tabItems.push(
                <TabItem title={tab.label} eventKey={i} active={tab.active}></TabItem>
            );
        }
        return (
            <div>
                <TabGroup onSelect={this.onTabSelect} activeKey={this.state.activeKey} children={tabItems}></TabGroup>
            </div>
        );
    }
}

export default Tabs;
