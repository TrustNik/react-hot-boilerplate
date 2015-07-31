import React, { Component } from 'react';
import Counter from './Counter.js';
import Store from './Store.js';

export default class App extends Component {

    
    changeStore = () => {
        Store.change();
    };

    render() {


        return (
            <div>

                <button onClick={this.changeStore}>Change store</button>
                <Counter byReference={true}/>
                <Counter byReference={false}/>
            </div>
        );
    }
}
