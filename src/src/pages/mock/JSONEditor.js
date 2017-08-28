import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import JSONEditor from 'jsoneditor';
import {FormControl} from 'components';
import 'jsoneditor/dist/jsoneditor.css';

class Comp extends Component{
    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.json) !== JSON.stringify(this.props.json)) {
            this.setData(nextProps.json);
        }
    }

    componentDidMount(){
        let container = ReactDOM.findDOMNode(this.refs.editor);
        let options = {
            mode: this.props.mode,
            name: this.props.name,
            search: false,
            onChange: this.props.onChange ? this.props.onChange.bind(this) : null
        };
        this.editor = new JSONEditor(container, options, this.props.json);
        this.editor.expandAll();
    }

    setData(json){
        this.editor.set(json);
        this.editor.expandAll();
    }

    getData(){
        return this.editor.get();
    }

    getValue(){
        return JSON.stringify(this.editor.get());
    }

    setValue(value){
        if(typeof value === 'object'){
            try {
                value = JSON.parse(value);
            } catch(e) {
                value = {};
            }

            this.setData(value);
        }
    }

    render(){
        return (
            <div style={{height: this.props.height, width: this.props.width}} ref='editor'></div>
        );
    }
}

FormControl.register(Comp, 'json', 'string');

export default Comp;
