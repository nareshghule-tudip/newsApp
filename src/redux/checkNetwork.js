import ActionType from '../utility/actionTypes';
/**
 *  Action for access the network information.
 */
export const checkNetwork = isConnected => {
  return dispatch =>
    new Promise(resolve => {
      dispatch({
        isConnected,
        type: ActionType.IS_CONNECTED,
      });
      resolve(isConnected);
    });
};

//Reducer for checkNetwork
const reducer = (
  state = {
    isConnected: false,
  },
  action,
) => {
  switch (action.type) {
    case ActionType.IS_CONNECTED: {
      return {
        ...state,
        isConnected: action.isConnected,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
