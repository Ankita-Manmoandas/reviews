import React from "react";


const Reviews = (props) => {
  const {
    bookURL,
    title,
    author,
    score,
    review
  } = props

  return (
    <div>
      <img src={bookURL}/>
      <h2>{title}</h2>
      <p>Author: {author} </p>
      <p> Rating: {score} </p>
      <p> Your detailed review: {review} </p>

    </div>
  )
}

export default Reviews;