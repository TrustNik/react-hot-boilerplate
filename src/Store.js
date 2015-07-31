import assign from 'object-assign';
import { EventEmitter } from 'events';

var Store = assign({}, EventEmitter.prototype, {
    state : {
        counter : 0
    },

    getStateFromStore() {
        return this.state;
    },
    
    change() {
        this.state.counter = Math.random();
    }
});

module.exports = Store;