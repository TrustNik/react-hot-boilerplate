import React, { Component } from 'react';
import Store from './Store.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = Store.getStateFromStore();
    }

    changeStore = () => {
        Store.change();
    }
    
    showState = () => {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <button onClick={this.changeStore}>Change store</button>
                <button onClick={this.showState}>Show current state</button>
                <div>Counter: {this.state.counter}</div>
            </div>
        );
    }
}
