
import Profile from '../Profile/Profile';
import Newsfeed from '../Newsfeed/Newsfeed';

export function ChangePageAdapter(id_page, dataComp) {

    switch(id_page) {

        // This case for Profile Page
        case 'H8HBZbNuLNUkzTf':
            return <Profile 
                UserInforClient={dataComp.UserInforClient}
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