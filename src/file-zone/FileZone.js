import React, { Component } from 'react';
import './FileZone.css';

import Element from './Element';
import Info from './Info';

class FileZone extends Component {
    renderText() {
        const { text, selected, onElementSelect } = this.props;
        let selectedValue = null;

        const renderedText = text.map(t => {
            const { value, id } = t;
            const isSelected = selected === id;
            if (isSelected) {
                selectedValue = value; // woah, mutation!
            }

            return <Element
                key={ id }
                {...t}
                selected={ isSelected }
                onSelect={ onElementSelect }
            >
                { value }
            </Element>;
        });

        return { renderedText, selectedValue };
    }

    render() {
        const { renderedText, selectedValue } = this.renderText();

        return <div id="file-zone">
            <div id="file">{ renderedText }</div>
            <Info { ...this.props } value={ selectedValue } />
        </div>;
    }
}

export default FileZone;
