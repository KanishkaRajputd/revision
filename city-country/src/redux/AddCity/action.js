export const ADDALLCITY="ADDALLCITY";
export const ADDCITY="ADDCITY";
export const DELETECITY="DELETECITY";
export const EDITCITY="EDITCITY";

export const AddallCity=(value)=>{
    return {
        type:ADDALLCITY,
        payload:value
    }
}
export const AddCity=(value)=>{
    return {
        type:ADDCITY,
        payload:value
    }
}
export const DeleteCity=(value)=>{
    return {
        type:DELETECITY,
        payload:value
    }
}
export const EditCity=(value)=>{
    return {
        type:EDITCITY,
        payload:value
    }
}

export const getCityData = () => async (dispatch) => {
    const res = await fetch(`http://localhost:8080/citydata`);
    const CityData = await res.json();
    console.log(CityData);
   dispatch(AddCity(CityData));
}