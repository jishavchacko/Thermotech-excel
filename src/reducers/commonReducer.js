import c from "../types/CommonTypes";

const initState = {
  load : false,
  action : "",
};

export default (
  state = initState,
  action
) => {
  switch(action.type) {
    case c.SET_COMMON_STATE :
      return {
        ...state,
        ...action.payload
      }
    
    default :
      return state
  }
};