import { Helmet } from "react-helmet";
import MainSection from "../MainSection/MainSection";
import About from "../About/About";



export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
                <>
                    <MainSection />
                    <About />
                </>
        </>
    )
}
