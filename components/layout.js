import Head from 'next/head';
import Header from "./header";
import Navigation from "./navigation";
import Footer from "./footer";
import Jumbotron from "./jumbotron";

function Layout({children, headTitle}) {
    return <div>
        <Head>
            <title>{headTitle}</title>
        </Head>

        <Header>
            <Navigation/>
        </Header>

        <Jumbotron title="World's Leading Movie App"/>

        <main className="container mx-auto py-5">
            {children}
        </main>

        <Footer/>

    </div>
}

export default Layout;