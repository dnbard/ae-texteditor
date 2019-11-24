import React, { Component } from 'react';

export default class Synonym extends Component {
    constructor(...args) {
        super(...args);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { onChange, children } = this.props;
        onChange(children);
    }

    render() {
        const { children } = this.props;

        return <span onClick={ this.onClick }>{ children }</span>;
    } 
}
