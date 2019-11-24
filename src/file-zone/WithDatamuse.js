import React, { Component } from 'react';

export default function withDatamuse(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            
            this.state = {
                isLoading: false,
                synonyms: []
            };
        }

        componentDidUpdate({ value: newValue }) {
            const { value } = this.props;

            if (value && newValue !== value) {
                this.setState({ isLoading: true });
                fetch(`https://api.datamuse.com/words?ml=${value}`)
                    .then(r => r.json())
                    .then(syns => {
                        this.setState({
                            isLoading: false,
                            synonyms: syns.slice(0, 5)
                        });
                    });
            }
            // else if (!newValue && newValue !== value) {
            //     this.setState({
            //         isLoading: false,
            //         synonyms: []
            //     });
            // }
        }

        render() {
            return <WrappedComponent {...this.props} {...this.state} />;
        }
    };
}