import Head from 'next/head';
import Header from "./header";
import Footer from "./footer";
import Navigation from "./navigation";

function Layout({children, headTitle}) {
    return <div className="flex flex-col h-screen justify-between">
        <Head>
            <title>{headTitle}</title>
        </Head>

        <Header>
            <Navigation/>
        </Header>

        <main className="container mx-auto py-5 px-4 lg:px-0">
            {children}
        </main>

        <Footer/>

    </div>
}

export default Layout;