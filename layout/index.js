import {Head} from "next/document";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

function Layout({children, headTitle}) {
    return <div>
        <Head>
            <title>{headTitle}</title>
        </Head>

        <Header>
            <Navigation/>
        </Header>

        <main>
            {children}
        </main>

        <Footer/>

    </div>
}

export default Layout;