import Home from './Pages/Home/Home';
import Posts from './Pages/Posts/Posts';
import PostDetails from './Pages/PostDetails/PostDetails';

const RoutesConfig = [{ path: '/post_details', component: PostDetails }, {path:'/posts', component: Posts}, {path: '/', component:Home}];

export default RoutesConfig;