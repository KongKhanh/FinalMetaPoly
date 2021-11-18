export const BASE_API_URL = 'http://localhost:4000';

export const API_URL = {

    // @Auth KongKhanh
    GET_SINGLE_USER: BASE_API_URL + "/user",

    GET_NEWS_FEED: BASE_API_URL + "/newsfeed",

    UPDATE_PROFILE_INFOR: BASE_API_URL + "/user/profile-setting",

    GET_LIST_USER: BASE_API_URL + "/userlist",

    GET_ADD_FRIEND: BASE_API_URL + "/friend",

    // @Auth VoVanHau
    CREATE_NEW_ACCOUNT: BASE_API_URL + '/user/create-new',

    AUTH_ACCOUNT_USING: BASE_API_URL + '/user/auth-using',

    CREATE_NEW_POST: BASE_API_URL + '/posting/single/create-new',

    CREATE_NEW_COMMENT: BASE_API_URL + '/posting/single/create-comment',

    CREATE_NEW_GROUP: BASE_API_URL + '/group/single/create-new',

    // @Auth Mai Mai
    CREATE_NEW_LIKE: BASE_API_URL + '/user/create-like',

    FORGOT_PASS: BASE_API_URL + '/user/forgotPass',

};
