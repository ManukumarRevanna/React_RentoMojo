export const BaseUrl = "https://jsonplaceholder.typicode.com";

export const userDataUrl = () => {
    return BaseUrl + '/users';
}
export const userPostUrl = (id) => {
    return BaseUrl + `/posts?userId=${id}`;
}


