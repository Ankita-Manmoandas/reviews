import logo from './logo.svg';
import './App.scss';
import Home from './containers/home/Home';
import Form from './components/Form/Form';
import Nav from './components/Nav/Nav';
import ReviewList from './components/ReviewList/ReviewList';
import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [bookReviews, setBookReviews] = useState([]);

  const getReviews = () => 
  fetch ("http://localhost:8080/reviews")
  .then(response => response.json())
  .then(json => setBookReviews(json))
  .catch(err => console.log(err))


  useEffect(() => {
    getReviews();
  },[bookReviews]
  );

  return (

    <div className="App">
      <Router> 
        <Nav />
        <Routes> 
          <Route path = "/" element = {<Home />} />
          <Route path = "/reviews" element={<ReviewList reviews={bookReviews} />} />
          <Route path = "/add-a-review" element = {<Form />} />
    
      </Routes>
      </Router>
    </div>
  );
}

export default App;
