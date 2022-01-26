import React, { useState } from "react";
import "./Form.scss"; 

const Form = () => {

  const [reviews,setReviews] = useState ( {
    bookURL: "",
    title: "",
    author: "",
    score: "",
    review: ""
  }

  )

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(reviews)
    fetch('http://localhost:8080/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviews)
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    event.target.reset();
  }
  

  return (
    <div className="form"> 
    <h2>Enter your book review here</h2>

    <form className="form__card" onSubmit= {handleSubmit}> 
    <label className="form__label">
      Book title </label>
      <input className="form__input" type="text" onInput={(event)=> setReviews({...reviews,title: event.target.value})} />
 
    <label className="form__label">
      Author
      </label>
      <input className="form__input" type="text" onInput={(event)=> setReviews({...reviews,author: event.target.value})}  />
   
    <label className="form__label">
      Score (out of 5)
      </label>
      <input className="form__input" type="text" onInput={(event)=> setReviews({...reviews, score: event.target.value})} />
 
    <label className="form__label">
    Review
    </label>
    <textarea rows="7" cols="40" className="form__input" type="text" onInput={(event)=> setReviews({...reviews, review: event.target.value})} ></textarea>
  
    <button type="submit" className="form__submit" > Submit </button>
  </form>
  </div>

  )
 
}


export default Form;