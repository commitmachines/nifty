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
    }

    onLoad(editor) {
        console.log('onload', editor);
        editor.setValue('hejsan', -1);
        const fs = require('fs');
    }

    render() {
        return (
            <AceEditor
                mode="pgsql"
                fontSize="25"
                onLoad={this.onLoad}
                theme="github"
                fontSize={14}
                showGutter={true}
                highlightActiveLine={false}
                name="best"
                editorProps={{$blockScrolling: false}} />
        );
    }
}

export default TextEditor;
