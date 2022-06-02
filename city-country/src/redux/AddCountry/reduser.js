import { ADD_COUNTRY } from "./action"



const init={addCountry:[]}
export const CountryReduser=(store=init,{type,payload})=>{
switch (type){
case ADD_COUNTRY:
    return {...store ,addCountry:payload};
default:
    return store;

}
}