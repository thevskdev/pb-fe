
import NextNProgress from 'nextjs-progressbar';
import RootContextProvider from '../context/RootContextProvider';
import '../styles/globals.css';


function MyApp({ Component, pageProps , appProps}) {
    return (
        <RootContextProvider appProps>
            <NextNProgress
                color="orange"
                height={12}
            />
             <Component {...pageProps} {...appProps} />
        </RootContextProvider>
    );
}

export default MyApp;
