import MastheadSlider from '../components/MastheadSlider';
import MastheadImages from '../components/MastheadImages';
import AboutMe from '../components/HomepageAboutMe'
import Header from '../components/Header'
const Home = () => {
    return (
        <>
            <div className='md:hidden'>
                <Header />
            </div>
            <div className='hidden md:block'>
                <MastheadImages />
            </div>
            <div className='md:hidden'>
                <MastheadSlider />
            </div>
            <AboutMe />
        </>
    );
}

export default Home;