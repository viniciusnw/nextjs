import Document, { Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        console.log(ctx)
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        console.log('document.js: ', this);
        console.log('document.js: ', this.props)

        return (
            <html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}