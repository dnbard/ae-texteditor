import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

export default class Element extends Component {
    constructor(...args) {
        super(...args);

        this.onDoubleClick = this.onDoubleClick.bind(this);
    }

    onDoubleClick() {
        const { onSelect, id } = this.props;

        onSelect(id);
    }

    render() {
        const { children, selected, bold, italic, underline } = this.props;

        const classList = [
            'element',
            selected ? 'selected' : undefined,
            bold ? 'bold' : undefined,
            italic ? 'italic' : undefined,
            underline ? 'underline' : undefined
        ];

        return <span
            className={ classList.join(' ') }
            onDoubleClick={ this.onDoubleClick }
        >
            { children 
        }</span>;
    }
}

export class ElementModel {
    constructor(value = '') {
        this.id = uuid();
        this.value = value;
        this.bold = false;
        this.italic = false;
        this.underline = false;
    }
}