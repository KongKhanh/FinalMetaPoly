// export const BASE_API_URL = 'http://localhost:4000';
// export const BASE_API_URL = 'https://hailuaviet.infinityfreeapp.com';
export const BASE_API_URL = 'https://trangvuhung001.000webhostapp.com';

export const API_URL = {

    // @Auth KongKhanh
    GET_SINGLE_USER: BASE_API_URL + "/user",

    GET_NEWS_FEED: BASE_API_URL + "/newsfeed",

    UPDATE_PROFILE_INFOR: BASE_API_URL + "/user/profile-setting",

    GET_LIST_USER: BASE_API_URL + "/userlist",

    GET_ADD_FRIEND: BASE_API_URL + "/friend",

    GET_FRIEND_REQUEST: BASE_API_URL + "/comfirm/friends/multif",

    COMFIRM_REQUEST_FRIEND: BASE_API_URL + '/confirm/friend/is-accept',

    FIND_NEW_FRIENDS:BASE_API_URL + '/find',

    // @Auth VoVanHau
    CREATE_NEW_ACCOUNT: BASE_API_URL + '/user/create-new',

    AUTH_ACCOUNT_USING: BASE_API_URL + '/user/auth-using',

    AUTH_ACCOUNT_ACCESS_TOKEN: BASE_API_URL + '/accessing/checking/token',

    CREATE_NEW_POST: BASE_API_URL + '/posting/single/create-new',

    CREATE_NEW_COMMENT: BASE_API_URL + '/posting/single/create-comment',
    
    CREATE_NEW_REPLY_COMMENT: BASE_API_URL + '/posting/single/reply-comment',

    CREATE_NEW_GROUP: BASE_API_URL + '/group/single/create-new',

    GET_INFO_SINGLE_GROUP: BASE_API_URL + '/group/single/data-visu',

    GET_INFO_META_GROUP: BASE_API_URL + '/group/user/joined',

    GET_GROUP_RECOMMEND: BASE_API_URL + '/group/recommend',

    REQUEST_TO_JOIN_GROUP: BASE_API_URL + '/group/request/sending/accept-join',

    // @Auth Mai Mai
    CREATE_NEW_LIKE: BASE_API_URL + '/user/create-like',

    FORGOT_PASS: BASE_API_URL + '/authentication/user/forgotPass',

    FRIEND_LIST: BASE_API_URL + '/friendlist',

};

export const PATH_MEDIA_CDN = {

    IMAGES_STORE_PATH: BASE_API_URL + '/public/upload/images/posting_store',

    VIDEOS_STORE_PATH: BASE_API_URL + '/public/upload/videos/posting_store',

    USER_AVATAR_STORE_PATH: BASE_API_URL + '/public/upload/images/user_avatar',
};
