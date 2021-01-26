import Home from './pages/home/home';
import Posts from './pages/posts/posts';
import PostDetails from './pages/postDetails/postDetails';

const RoutesConfig = [
	{ path: '/post_details/:id', component: PostDetails },
	{ path: '/posts/:id', component: Posts },
	{ path: '/', component: Home },
];

export default RoutesConfig;
