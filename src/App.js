import Menu from './components/menu';
import Header from './components/header';
import About from './Pages/about/About';

import Footer from './components/footer/Footer';
import HomePage from './Pages/home/HomePage';
import BookPage from './Pages/book/BookPage';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Authors from './Pages/authors/Authors';
import Cart from './Pages/cart/Cart';
import Contact from './Pages/contact/Contact';
import Loginclient from './components/authentificationClient/loginClient';
import Signup from "./components/authentificationClient/Signup";
import LoginAdmin from "./components/authentificationClient/loginAdmin";
import Dashbord from './components/Dashbord/dashbord';
import BookSlider from './components/book-slider/BookSlider';
import AddArticle from './components/AddArticle';
function App() {
  return (
    <Router>
     <Menu/>
      <Routes>
      
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/book/:id" element={<BookPage />} />
        <Route path='/authors' element={<Authors/>}></Route>
        <Route path="/BookSlider" element={<BookSlider/>}></Route>
        <Route path='/AddArticle' element={<AddArticle/>}/>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path="/loginclient" exact element={<Loginclient/>}/>
        <Route path="/signup" exact element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashbord/>}/>
        <Route path='/admin' element={<LoginAdmin/>}/>
        {/*<div className='container-fluid'>
          <div className='row'>
            <div className='col-2'>
        <Route path='/dashbord' element={<SideBarAdmin/>}/>
        </div>
        </div>
  </div>*/}

      </Routes>
     
    </Router>
  );
}

export default App;
