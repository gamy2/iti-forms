const INIT_STATE={
    certificate:[]
}

export const certificateReducer=(state=INIT_STATE,action)=>{
    switch(action.type){
    case"CHANGE_CERTIFICATE" :
    return{
        ...state,
        certificate:action.payload
    };
    default:
        return state;
    }
}