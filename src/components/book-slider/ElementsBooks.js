
import Rating from './Rating';
import './book-slider.css';
import BookStoreContext from '../context/bookStorContext';
import Modal from '../modal/Modal';
import { useState,useContext } from "react"; 
function ElementsBooks(props){
    const { addToCart } = useContext(BookStoreContext);
    const [slideIndex, setSlideIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [bookData, setBookData] = useState(null);
    const handleClick = (direction) => {
        if (direction === "left") {
          setSlideIndex(slideIndex - 1);
        } else {
          setSlideIndex(slideIndex + 1);
        }
    };
    const handleModal = (item) => {
        setOpenModal(true);
        setBookData(item);
        console.log(item);
      }
        return(
            <div className="book-slider-container">
                {slideIndex >= 0 && <i
                    onClick={() => handleClick("left")}
                    className="bi bi-chevron-left book-slider-arrow-left"
                ></i>}
                <div style={{ transform: `translateX(${slideIndex * -340}px)` }} className="book-slider-wrapper" >

            {
                props.articles.map(item =>{
                return(
                <div key={item.id} className="book-slide-item">
                    <img src={`/books/${item.image}`} alt={item.title} className="book-slide-item-img"/>
                    <h3 className="book-slide-item-title">{item.title}</h3>
                    <Rating rating={item.rating} reviews={item.reviews}/>
                    <div className="book-slider-item-price">${item.price}</div>
                    <div className="book-slider-icons-wrapper">
                    <i  onClick={() => handleModal(item)} className="bi bi-eye-fill"></i>
                    <i  onClick={() => addToCart({...item,quantity: 1})} className="bi bi-cart-plus"></i>
            </div>
                </div>
                )
                })
            }
                </div>
                {slideIndex <= props.articles.length - 1 && (
                <i
                onClick={() => handleClick("right")}
                className="bi bi-chevron-right book-slider-arrow-right"
                ></i>
                
      )}
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
      {/*<Modal bookData={bookData} setOpenModal={setOpenModal} /> est le composant Modal qui est rendu conditionnellement. Il est rendu seulement si openModal est true.*/}
            </div>
        )
}
export default ElementsBooks