import HeadingTitle from '../../components/heading-title/HeadingTitle';
import Slider from '../../components/Slider/Slider';
import Services from '../../components/services/services';
import BookSlider from '../../components/book-slider/BookSlider';
import Menu from '../../components/menu';
import Header from '../../components/header';

import Footer from '../../components/footer/Footer';
function HomePage() {
    return ( <div className="Home">
        
        <Header/>
        <Slider/>
        <Services/>
        <HeadingTitle title="Most Gifted "/>
        <BookSlider/>
        <HeadingTitle title="Best Seller "/>
        <BookSlider/>
        <Footer/>
        
    </div> );
}

export default HomePage;