import SignIn from '../Authentication/SignIn';
import SignUp from '../Authentication/SignUp';
import Profile from '../Profile/Profile';
import Newsfeed from '../Newsfeed/Newsfeed';
import Group from '../Group/Group';



// Just for seeing, reading. No Export for using any task.
const PageListConfig = [
    {
        id_page: 'gh7Gv46kZYuhrAP',
        component: <SignIn />,
        note: 'Page nay la  page SignIn'
    },
    {
        id_page: '6VRiCktUwxaLAud',
        component: <SignUp />,
        note: 'Page nay la  page SignUp'
    },
    {
        id_page: 'jdvwW87LnMUJB69',
        component: <ForgotPassword />,
        note: 'Page nay la  page quen pass'
    },
    {
        id_page: 'H8HBZbNuLNUkzTf',
        component: <Profile />,
        note: 'Page nay la page Profile'
    },
    {
        id_page: 'uGqXQpyJeFUoBqm',
        component: <Newsfeed />,
        note: 'Page nay la page newsfeed'
    },
    {
        id_page: 'qT54LN6UKjYRd5x',
        component: <Group />,
        note: 'Page nay la page group'
    },
];
