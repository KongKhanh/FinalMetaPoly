import SignUp from '../Authentication/SignUp';
import SignIn from '../Authentication/SignIn';
import Profile from '../Profile/Profile';
import Newsfeed from '../Newsfeed/Newsfeed';
import Group from '../Group/Group';
import ForgotPassword from '../Authentication/ForgotPassword';

export function ChangePageAdapter(id_page, dataComp, props) {

    switch(id_page) {

        // This case for SignUp Page
        case '6VRiCktUwxaLAud':
            return <SignUp 
                setCurrentPage={props.setCurrentPage}
                UserInforClient={props.UserInforClient}
                setUserInforClient={props.setUserInforClient}
            />

        // This case for SignIn Page
        case 'gh7Gv46kZYuhrAP':
            return <SignIn 
                setCurrentPage={props.setCurrentPage}
                UserInforClient={props.UserInforClient}
            />

        // This case for Forgot Password
        case 'jdvwW87LnMUJB69':
            return <ForgotPassword 
                setCurrentPage={props.setCurrentPage}
                UserInforClient={props.UserInforClient}
            />

        // This case for Profile Page
        case 'H8HBZbNuLNUkzTf':
            return <Profile 
                UserInforClient={dataComp.UserInforClient}
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
                UserInforClient={props.UserInforClient}
                setCurrentPage={props.setCurrentPage}
            />

        // This case for Group Page
        case 'qT54LN6UKjYRd5x':
            return <Group 
                UserInforClient={props.UserInforClient}
            />

        default: return <Newsfeed />

    }
    

}