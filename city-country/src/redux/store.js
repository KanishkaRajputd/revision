import {  legacy_createStore as createStore ,combineReducers } from 'redux'
import { CityReduser } from './AddCity/reduser';
import { CountryReduser } from './AddCountry/reduser';

const RootReduser=combineReducers({
addCity:CityReduser,
addCountry:CountryReduser
})
export const store=createStore(
    RootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    );
