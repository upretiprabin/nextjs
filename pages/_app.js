import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';
import GlobalStyle from '../utils/global-styles';
import Footer from '../components/Footer';
import {Provider} from 'react-redux';
import "foundation-sites/dist/css/foundation.min.css";
import "font-awesome/css/font-awesome.min.css";
import store from '../redux/store';
import Popup from '../components/popups';
import ErrorBoundary from "../components/ErrorBoundary";

export default function App({Component, pageProps}) {

  return <>
    <Provider store={store}>
      <NextNProgress options={{showSpinner: false}}/>
      <GlobalStyle/>
      <ErrorBoundary>
        <Popup/>
        <Component {...pageProps} />
        <Footer/>
      </ErrorBoundary>
    </Provider>
  </>
}
