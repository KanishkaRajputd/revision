import { ADDALLCITY, ADDCITY, DELETECITY ,EDITCITY} from "./action";



const init={addCity:[]}


export const CityReduser=(store=init,{type,payload})=>{
switch(type){
case ADDALLCITY:
    return {...store,addCity:[...payload]};
case ADDCITY:
    return {...store,addCity:[...store.addCity,payload]}
case DELETECITY:
        return {...store,addCity:[...store.addCity].filter((e)=>e.id!==payload.id)
        }
case EDITCITY:
    return {...store,addCity:[...store.addCity].map((e)=>e.id==payload.id? payload:e)
    }
default:
    return store;
}
}
