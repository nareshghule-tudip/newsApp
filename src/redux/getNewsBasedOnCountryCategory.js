import {httpGet} from '../utility/http';
import ActionType from '../utility/actionTypes';
import {GET_NEWS} from '../utility/apis';
import config from '../utility/config';
import {fetchErrorMessage} from '../utility/helper';
/**
 *  Action for access getting news list
 * @param category
 * @param country
 */

export const getNewsBasedOnCountryCategory = (category, country) => {
  return dispatch =>
    new Promise((resolve, reject) => {
      dispatch({
        type: ActionType.GET_NEWS_REQUEST,
      });
      httpGet(
        `${GET_NEWS}country=${country}&category=${category}&apiKey=${config.API_KEY}`,
      )
        .then(response => {
          dispatch({
            newsPayload: response.data,
            type: ActionType.GET_NEWS_SUCCESS,
          });
          resolve(response.data);
        })
        .catch(error => {
          const errorMessage = fetchErrorMessage(error);
          dispatch({
            type: ActionType.GET_NEWS_FAIL,
          });
          reject(errorMessage);
        });
    });
};

//Reducer for the news list

const reducer = (
  state = {
    fetching: false,
    newsPayload: null,
  },
  action,
) => {
  switch (action.type) {
    case ActionType.GET_NEWS_REQUEST: {
      return {
        ...state,
        fetching: true,
      };
    }
    case ActionType.GET_NEWS_SUCCESS: {
      return {
        ...state,
        fetching: false,
        newsPayload: action.newsPayload,
      };
    }
    case ActionType.GET_NEWS_FAIL: {
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
