import Head from 'next/head';
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Jumbotron from "../components/jumbotron";

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