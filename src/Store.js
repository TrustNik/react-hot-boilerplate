import assign from 'object-assign';
import { EventEmitter } from 'events';

var Store = assign({}, EventEmitter.prototype, {
    state : {
        counter : 0
    },

    getStateFromStoreByRefernce() {
        return this.state;
    },
    
    getStateFromStore() {
        return {counter : this.state.counter};
    },
    
    change() {
        this.state.counter = Math.random();
    }
});

module.exports = Store;