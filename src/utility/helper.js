import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addDefaultLocale(en);
import constant from './constant';
const timeAgo = new TimeAgo('en-US');


/**
 *  Action for access getting news list
 * @param date from which want to get the time ago value
 */

export const getTimeAgo = date => {
  const formatDate = new Date(date);
  return timeAgo.format(formatDate);
};

/**
 *  Function to return the proper error
 * @param error which is getting from API
 */
export const fetchErrorMessage = error => {
  if (
    (error.response && error.response.status === constant.HTTP_ERROR_CODE) ||
    (error.response && error.response.status === constant.SERVER_NOT_FOUND)
  ) {
    return constant.REQ_FAILED;
  } else if (
    error.response &&
    error.response.status === constant.UNAUTHORIZED_ACCESS_CODE
  ) {
    return constant.UNAUTHORIZED_ACCESS_MESSAGE;
  }
  return constant.SOMETHING_WENT_WRONG;
};
