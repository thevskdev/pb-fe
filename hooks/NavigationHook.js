const { useRouter } = require('next/router');
// navhook
const useNavigationHook = () => {
    const router = useRouter();

    const handleRedirect = (path, options) => {
        router.push({
            pathname: path,
            query: { ...options },
        });
    };

    return {
        handleRedirect,
    };
};

export default useNavigationHook;
