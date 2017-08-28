
import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import mockReducer from './mockReducer';
import interfaceReducer from './interfaceReducer';
import interfaceDetailReducer from './interfaceDetailReducer';
import interfaceAddReducer from './interfaceAddReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    loginState: loginReducer,
    router: routerReducer,
    mockState: mockReducer,
    interfaces: interfaceReducer,
    interface: interfaceDetailReducer,
    interfaceAdd: interfaceAddReducer
});

export default rootReducer;
