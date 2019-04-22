import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../components/shared/Layout/Layout';
import withReduxStore from '../lib/with-redux-store';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx });
        }

        pageProps.query = ctx.query;
        return { pageProps };
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props
        return <Container>
            <Provider store={reduxStore}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </Container>
    }
}

export default withReduxStore(MyApp)