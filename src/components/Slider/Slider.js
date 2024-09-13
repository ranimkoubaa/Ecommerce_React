import './Slider.css';
import { useState } from "react";
function Slider(){
    
    const book1='../book1.png';
    const book2='book2.png';
    const book3 = 'book3.png';
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick=(direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex>0 ? slideIndex - 1:2);//condition : if slideIndex > 0
      } else {
        setSlideIndex(slideIndex <2 ? slideIndex + 1:0);
      }
    };
    return( <div className="slider-container" >
        <i onClick ={() => handleClick("left")} className="bi bi-chevron-double-left arrow-left"></i>
        <div className="slider-wrapper" style={{ transform: `translateX(${slideIndex * -100}vw)` }}> {/*5alineh -100 bach yemchi lil isar 5ater kenn a3tineh a3dad positive yemchi lil imin*/}
        {/*hatina -100vh 5ater width mta3 slide = 100vh*/}
        <div className="slide first-slide">
        <div className="slide-image-wrapper">
            <img src={book1} alt="mmmmmmmmmmmmmmmmmmmmmmmmmm" />
            </div>
            <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Book Store</h1>
            <p className="slide-info-desc">
              It's not just reading. it's living the adventure
            </p>
          </div>
            </div>
            <div className="slide second-slide">
          <div className="slide-image-wrapper">
            <img src={book2} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">The Books For Everyone</h1>
            <p className="slide-info-desc">
              You can read at the bookstore or at home
            </p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-image-wrapper">
            <img src={book3} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">Check Out The New Titles</h1>
            <p className="slide-info-desc">
              We send you the book you want at home
            </p>
          </div>
        </div>
      </div>
      <i onClick ={() => handleClick("right")} className="bi bi-chevron-double-right arrow-right"></i>
    </div>);
}
export default Slider