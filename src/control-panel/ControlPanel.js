import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    constructor(...args) {
        super(...args);

        this.makeBold = this.make.bind(this, 'bold');
        this.makeItalic = this.make.bind(this, 'italic');
        this.makeUnderline = this.make.bind(this, 'underline');
    }

    make(prop) {
        const { text, selected, onElementSelect } = this.props;

        const el = text.find(t => t.id === selected);

        if (el) {
            el[prop] = !el[prop];
            onElementSelect(null);
        }
    }

    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={ this.makeBold }><b>B</b></button>
                    <button className="format-action" type="button" onClick={ this.makeItalic }><i>I</i></button>
                    <button className="format-action" type="button" onClick={ this.makeUnderline }><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
