import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="shortcut icon" href="/static/images/favicon.png" />
                    <link rel="stylesheet" href="/static/css/fonts.css" />
                    <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/static/css/slick.min.css" charSet="UTF-8" />
                    <link rel="stylesheet" href="/static/css/slick-theme.min.css" />
                    <link rel="stylesheet" href="/static/css/animate.min.css" />
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}