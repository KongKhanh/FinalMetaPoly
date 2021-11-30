import SignUp from '../Authentication/SignUp';
import SignIn from '../Authentication/SignIn';
import Profile from '../Profile/Profile';
import Newsfeed from '../Newsfeed/Newsfeed';
import Group from '../Group/Group';
import ForgotPassword from '../Authentication/ForgotPassword';
import SupperChat from '../Chat/SuperChat';

export function ChangePageAdapter(id_page, dataComp, props) {

    switch(id_page) {

        // This case for SignUp Page
        case '6VRiCktUwxaLAud':
            return <SignUp 
                setCurrentPage={ props.setCurrentPage && typeof props.setCurrentPage === 'function' && props.setCurrentPage instanceof Function ? props.setCurrentPage : undefined }
                UserInforClient={ props && props.UserInforClient && typeof props.UserInforClient === 'object' ? props.UserInforClient : undefined }
                setUserInforClient={ props &&  props.setUserInforClient && typeof props.setUserInforClient === 'function' && props.setUserInforClient instanceof Function ? props.setUserInforClient : undefined }
            />

        // This case for SignIn Page
        case 'gh7Gv46kZYuhrAP':
            return <SignIn 
                setCurrentPage={ props.setCurrentPage && typeof props.setCurrentPage === 'function' && props.setCurrentPage instanceof Function ? props.setCurrentPage : undefined }
                UserInforClient={ props && props.UserInforClient && typeof props.UserInforClient === 'object' ? props.UserInforClient : undefined }
            />

        // This case for Forgot Password
        case 'jdvwW87LnMUJB69':
            return <ForgotPassword 
                setCurrentPage={ props.setCurrentPage && typeof props.setCurrentPage === 'function' && props.setCurrentPage instanceof Function ? props.setCurrentPage : undefined }
                UserInforClient={ props && props.UserInforClient && typeof props.UserInforClient === 'object' ? props.UserInforClient : undefined }
            />

        // This case for Profile Page
        case 'H8HBZbNuLNUkzTf':
            return <Profile 
                UserInforClient={dataComp && dataComp.UserInforClient && typeof dataComp.UserInforClient === 'object' ? dataComp.UserInforClient : undefined}
            />

         // This case for Profile Any User Page
         case 'ywHfYcKTYtkfREz':
            return <Profile 
                UserInforClient={
                   { userId: 'Ng==',
                    access_token: '',
                    user_phone: '',
                    user_name: '',}
                }
            />

        // This case for Newsfeed Page
        case 'uGqXQpyJeFUoBqm':
            return <Newsfeed 
                UserInforClient={ props && props.UserInforClient && typeof props.UserInforClient === 'object' ? props.UserInforClient : undefined }
                setCurrentPage={ props.setCurrentPage && typeof props.setCurrentPage === 'function' && props.setCurrentPage instanceof Function ? props.setCurrentPage : undefined }
            />

        // This case for Group Page
        case 'qT54LN6UKjYRd5x':
            return <Group 
                UserInforClient={ props && props.UserInforClient && typeof props.UserInforClient === 'object' ? props.UserInforClient : undefined }
            />

        // This case for Chat Page
        case 'UynckbNrNL5c8Nu':
            return <SupperChat 
                UserInforClient={dataComp && dataComp.UserInforClient && typeof dataComp.UserInforClient === 'object' ? dataComp.UserInforClient : undefined}
            />

        default: return <></>

    }
    

}