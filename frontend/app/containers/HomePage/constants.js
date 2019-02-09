/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// // export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const CHANGE_STRING = 'boilerplate/Home/CHANGE_STRING';
export const UPLOAD_STRING = 'boilerplate/Home/UPLOAD_STRING';
export const UPLOAD_STRING_SUCCESS = 'boilerplate/Home/UPLOAD_STRING_SUCCESS';
export const UPLOAD_STRING_ERROR = 'boilerplate/Home/UPLOAD_STRING_ERROR';
export const CLEAR_SUCCESS_ERROR = 'boilerplate/Home/CLEAR_SUCCESS_ERROR';
