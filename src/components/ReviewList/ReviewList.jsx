import React from "react";
import Reviews from "../Reviews/Reviews";

const ReviewList = (props) => {

  return (
    <div>
      <h2> All your reviews</h2>
      <div>
        { props.reviews && props.reviews.map (review => <Reviews reviews={review}/>)}
    
      </div>

     
    </div>
  )
}

export default ReviewList;