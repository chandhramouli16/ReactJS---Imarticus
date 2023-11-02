const initialState={
    message:"Subscribe to Imarticus"
};

const reducer=(state=initialState,action)=>{
    const newState={...state};
    if(action.type === "Message_change"){
        newState.message="Thank you for subscribing";
    }
    return newState;
};

export default reducer;