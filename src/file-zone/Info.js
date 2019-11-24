import React, { Component } from 'react';
import './Info.css';

import withDatamuse from './WithDatamuse';
import Synonym from './Synonym';

export class Info extends Component {
    constructor(...args) {
        super(...args);
        
        this.formatRegex = /[\W]/g;
        this.changeToSynonym = this.changeToSynonym.bind(this);
    }

    changeToSynonym(synonym) {
        const { text, selected, onElementSelect } = this.props;
        
        const el = text.find(t => t.id === selected);

        if (el) {
            el.value = synonym;
            onElementSelect(null);
        }
    }

    render() {
        const { value, synonyms=[] } = this.props;
        const formatedValue = value ? value.replace(this.formatRegex, '') : 'nothing';
        const synsToDisplay = synonyms.map(s => <Synonym key={ s.word } onChange={ this.changeToSynonym }>
            { s.word }
        </Synonym>);

        return <div>
            <div>Selected value: { formatedValue }</div>
            <div className="synonyms">Synonyms: { synsToDisplay.length > 0 ? synsToDisplay : 'double-click on word' }</div>
        </div>;
    }
}

export default withDatamuse(Info);