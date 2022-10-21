
const useErrorPageHook = () => {
    const { useNavigationHook } = CustomNavigationHook;

    return {
        handleRedirect,
    };
};

const ErrorPageViewFunc = { useErrorPageHook };

export default ErrorPageViewFunc;
