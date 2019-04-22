import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Head from 'next/head';

const Layout = (props) => {
    const title = "Sanarflix";
    return (
        <div>
            <Head>
                <title>{title}</title>
                {process.env.NODE_ENV !== 'production' && (
                    <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
                )}
            </Head>
            <Menu />
            <section className="page_container">
                {props.children}
            </section>
            <Footer />
        </div>
    );
}

export default Layout;