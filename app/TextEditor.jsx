import React from "react";
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/mode/pgsql';
import 'brace/theme/github';
import 'brace/theme/monokai';

class TextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onLoad = this.onLoad.bind(this);
        this.onCopy = this.onCopy.bind(this);
    }

    onLoad(editor) {
        this.props.onLoad(editor);
        console.log('onload', editor);
        editor.setValue('hejsan', -1);
        editor.setOptions({
          fontFamily: "Menlo"
        });
        const fs = require('fs');
    }
    onCopy(buffer) {
        if (this.props.onQueryResult) {
            this.props.onQueryResult({
                rows: [
                    ["hej", "du"],
                    ["asdasd", "fdgjg"]
                ]
            });
        }
        console.log('onCopy', buffer);
    }

    render() {/*Inconsolata, Monaco, Consolas, 'Courier New', Courier;*/
        return (
            <AceEditor
                mode="pgsql"
                fontSize="25"
                onLoad={this.onLoad}
                theme="github"
                showPrintMargin={true}
                onCopy={this.onCopy}
                fontSize={13}
                fontFamily="Courier New"
                showGutter={true}
                highlightActiveLine={false}
                name="best"
                editorProps={{$blockScrolling: false}} />
        );
    }
}

export default TextEditor;
