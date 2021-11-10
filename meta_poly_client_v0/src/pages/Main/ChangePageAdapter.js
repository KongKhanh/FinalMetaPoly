import SignUp from '../Authentication/SignUp';
import SignIn from '../Authentication/SignIn';
import Profile from '../Profile/Profile';
import Newsfeed from '../Newsfeed/Newsfeed';


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


        // This case for Profile Page
        case 'H8HBZbNuLNUkzTf':
            return <Profile 
                UserInforClient={dataComp.UserInforClient}
            />

        // This case for Newsfeed Page
        case 'uGqXQpyJeFUoBqm':
            return <Newsfeed />

    }
    

}