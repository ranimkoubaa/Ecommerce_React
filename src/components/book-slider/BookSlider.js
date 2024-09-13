import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsBooks from './ElementsBooks';
import BookPage from '../../Pages/book/BookPage';
function BookSlider(){
    const[books,setBooks]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3001/books")
        .then((response)=>setBooks(response.data));
       }, []);

    return(<>
           {/* <h2>Liste des articles </h2>*/}
        <ElementsBooks articles={books} />
        <BookPage books={books} />

    </>);
}
export default BookSlider