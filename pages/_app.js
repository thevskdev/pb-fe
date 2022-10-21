
import NextNProgress from 'nextjs-progressbar';
import RootContextProvider from '../context/RootContextProvider';
import '../styles/globals.css';


function MyApp({ Component, pageProps}) {
    return (
        <RootContextProvider>
            <NextNProgress
                color="orange"
                height={12}
            />
             <Component {...pageProps} />
        </RootContextProvider>
    );
}

export default MyApp;
