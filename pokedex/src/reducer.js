import reducerDashboard from './Pages/Dashboard/Redux';
import { combineReducers } from 'redux';

export default combineReducers({
    dashboard: reducerDashboard
});