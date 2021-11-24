export const BASE_API_URL = 'http://localhost:4000';

export const API_URL = {

    // @Auth KongKhanh
    GET_SINGLE_USER: BASE_API_URL + "/user",

    GET_NEWS_FEED: BASE_API_URL + "/newsfeed",

    UPDATE_PROFILE_INFOR: BASE_API_URL + "/user/profile-setting",

    GET_LIST_USER: BASE_API_URL + "/userlist",

    GET_ADD_FRIEND: BASE_API_URL + "/friend",

    GET_FRIEND_REQUEST: BASE_API_URL + "/comfirm",

    COMFIRM_REQUEST_FRIEND: BASE_API_URL + '/confirm/friend/is-accept',

    FIND_NEW_FRIENDS:BASE_API_URL + '/find',

    // @Auth VoVanHau
    CREATE_NEW_ACCOUNT: BASE_API_URL + '/user/create-new',

    AUTH_ACCOUNT_USING: BASE_API_URL + '/user/auth-using',

    CREATE_NEW_POST: BASE_API_URL + '/posting/single/create-new',

    CREATE_NEW_COMMENT: BASE_API_URL + '/posting/single/create-comment',

    CREATE_NEW_GROUP: BASE_API_URL + '/group/single/create-new',

    GET_INFO_SINGLE_GROUP: BASE_API_URL + '/group/single/data-visu',

    GET_INFO_META_GROUP: BASE_API_URL + '/group/user/joined',

    // @Auth Mai Mai
    CREATE_NEW_LIKE: BASE_API_URL + '/user/create-like',

    FORGOT_PASS: BASE_API_URL + '/authentication/user/forgotPass',

};
