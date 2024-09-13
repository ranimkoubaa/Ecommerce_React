import { useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';
function AddArticle() {

    const navigate=useNavigate();

  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [Reviews, setReviews] = useState("");
  const [printLength, setPrintLength] = useState("");
  const [image, setImage] = useState("");
  const [language, setLanguage] = useState("");
  const [publicationDate,setPublicationDate] = useState("");
  const inStock=true;
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      price,
      rating,
      title,
      author, 
      Reviews, 
      printLength, 
      language,
      publicationDate,
      image,
      inStock
    };
  
//faire le add dans la BD
axios.post("http://localhost:3001/books",newProduct)
.then(res => {  
console.log(res);
navigate("/BookSlider")
  })   
.catch(error=>{
    console.log(error)
    alert("Erreur ! Insertion non effectuée")
    })

}

return ( 
<div className="container">
        <h2>Ajout d'un produit </h2>
        <form onSubmit={handleSubmit}>
    <div className="grid gap-3">
    <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Author"
          name="designation"
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Marque"
          type="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Rating"
          type="text"
          value={rating}
          onChange={e => setRating(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Reviews"
          name="Reviews"
          type="text"
          value={Reviews}
          onChange={e => setReviews(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="PrintLength"
          type="number"
          value={printLength}
          onChange={e => setPrintLength(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="Language"
          type="text"
          value={language}
          onChange={e => setLanguage(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="PublicationDate"
          type="text"
          value={publicationDate}
          onChange={e => setPublicationDate(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
     <input className="form-control"
          placeholder="Image"
          type="text"
          value={image}
          onChange={e => setImage(e.target.value)}
          />
    </div>    
    <div>{image ?<img src={image} alt="" width="70"/>:null}</div> 
     <div>
    <button className="btn btn-success">Valider</button>
    </div>  
    </div>
    </form>
   
  </div>

     );
}

export default AddArticle;
