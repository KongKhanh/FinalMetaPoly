import Profile from '../Profile/Profile';


export function ChangePageAdapter(id_page, dataComp) {

    switch(id_page) {

        // This case for Profile Page
        case 'H8HBZbNuLNUkzTf':
            return <Profile 
                UserInforClient={dataComp.UserInforClient}
            />

    }

}