import React, { Component } from 'react';
import Store from './Store.js';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.byReference ? Store.getStateFromStoreByRefernce() : Store.getStateFromStore();
    }
    
    showState = () => {
        this.forceUpdate();
    };

    render() {
        return (
            <div>
                <button onClick={this.showState}>Show current state</button>
                <div>Counter {this.props.byReference ? 'by reference' : '' }: {this.state.counter}</div>
            </div>
        );
    }
}
