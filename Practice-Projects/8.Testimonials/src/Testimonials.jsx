import React from 'react'
import './index.css'
import { useState } from 'react'

function Testimonials() {

const[currentIndex, setCurrentIndex] = useState(0)

const testimonials = [
    {
    quote:"This is the best product I've ever used!",
    author:"Jane Doe",
},
    {
    quote:"I highly recommend this product to everyone!",
    author:"John Smith",
},
    {
    quote:"This product has changed completely my life!",
    author:"Rahul Sharma",
},
    {
    quote:"This is the product i personally wanted to suggest!",
    author:"Harshit Dubey",
},
]

const handlePrevClick =() => {
    setCurrentIndex(
        (currentIndex + testimonials.length - 1) % testimonials.length
    )
}
const handleNextClick =() => {
    setCurrentIndex(
        (currentIndex + 1) % testimonials.length
    )
}

  return (
    <div className='testimonials'>
        <div className="testimonials-quote">
            {testimonials[currentIndex].quote}
        </div>
        <div className="testimonials-author">
           ~~ {testimonials[currentIndex].author}
        </div>
        <tetimonials className="testimonials-nav">
            <button onClick={handlePrevClick}>Prev</button>
            <button onClick={handleNextClick}>Next</button>
        </tetimonials>
     
    </div>
  )
}

export default Testimonials
