import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";


import Element, { ElementModel } from './file-zone/Element';

import getMockText, { getTextDataModel } from './text.service';

class App extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            text: [],
            selected: null
        };

        this.onElementSelect = this.onElementSelect.bind(this);
    }

    componentDidMount () {
        getTextDataModel().then(text =>{
            return text.map( t => new ElementModel(t));
        }).then(data => {
            return this.setState({ text: data });
        });
    }

    onElementSelect(id) {
        this.setState({ selected: id });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel { ...this.state } onElementSelect={ this.onElementSelect } />
                    <FileZone { ...this.state } onElementSelect={ this.onElementSelect } />
                </main>
            </div>
        );
    }
}

export default App;
