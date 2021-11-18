import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <meta charSet="UTF-8"/>
                    <meta name="theme-color" content="#fbbf24" />
                    <meta name="description" content="Next Gen Movie App"/>
                </Head>

                <body className="bg-white dark:bg-gray-900">
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument