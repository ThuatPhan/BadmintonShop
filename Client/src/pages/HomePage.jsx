import Navbar from "../components/Navbar"
import Search from "../components/Search"
import Banner from "../components/Banner"
import Features from "../components/Features"
import Content from "../components/Content"
import BestSeller from "../components/BestSeller"
import Fact from "../components/Fact"
import Footer from "../components/Footer"
import BackToTop from "../components/BackToTop"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Search />
            <Banner />
            <Features />
            <Content />
            <BestSeller />
            <Fact />
            <Footer />
            <BackToTop/>
        </>
    )
}

export default HomePage