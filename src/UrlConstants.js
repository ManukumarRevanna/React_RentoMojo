export const BaseUrl = 'https://jsonplaceholder.typicode.com';

export const userDataUrl = () => {
	return BaseUrl + '/users';
};

export const generateUserPostsUrl = (id) => {
	return BaseUrl + `/posts?userId=${id}`;
};

export const generatePostUrl = (id) => {
	return BaseUrl + `/posts/${id}`;
};
