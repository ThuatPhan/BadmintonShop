import Navbar from "../components/HomePage/Navbar"
import Banner from "../components/HomePage/Banner"
import Features from "../components/HomePage/Features"
import Content from "../components/HomePage/Content"
import BestSeller from "../components/HomePage/BestSeller"
import Fact from "../components/HomePage/Fact"
import Footer from "../components/HomePage/Footer"
import BackToTop from "../components/HomePage/BackToTop"

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Content />
            <Features />
            <BestSeller />
            <Fact />
            <Footer />
            <BackToTop />
        </>
    )
}

export default HomePage