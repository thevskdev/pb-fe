const baseUrl = 'https://lmsblog.herokuapp.com/api';

const requests = {

    blog: {
        getPosts: `${ baseUrl }/blogger/post/getAllPosts`,
    },
    common: {
        subscribe: `${ baseUrl }/blogger/subscribe`,
        contactUs: `${ baseUrl }/blogger/contactus`,
    },
};

export default requests;
