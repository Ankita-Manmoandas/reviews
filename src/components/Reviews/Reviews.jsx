import React from "react";
import "./Reviews.scss"


const Reviews = (props) => {
  const {
    id,
    bookURL,
    title,
    author,
    score,
    review
  } = props.reviews

  //delete button for each review
  //link to delete request
  const handleDelete = (event) => {
    event.preventDefault()
    fetch(`http://localhost:8080/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
     
    })
    .then((response) => response.json())
    .then((json => console.log(json)))
    .catch(err => console.log(err))
    
  }

  



  return (
    <div className="review">
      <img className="review__cover"src={bookURL}/>
      <h2 className="review__label">{title}</h2>
      <br />
      <p className="review__label">Author: 
      <br/>
      {author} </p>
      <p className="review__label"> Rating: {score} </p>
      <p className="review__label"> Your detailed review: 
      <br/> {review} </p>
      <button onClick={handleDelete}> delete</button>

      

    </div>
  )
}

export default Reviews;