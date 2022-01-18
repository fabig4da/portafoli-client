const { createStore, combineReducers, compose, applyMiddleware } = require('redux');
const { authReducer } = require('./reducers/authReducer');

const reducers = combineReducers({
    auth: authReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    composeEnhancers(applyMiddleware())
);
