import React from 'react'
import Image from 'react-bootstrap/Image';
import moviePosters from '../images/movies.jpg'

export const Contact = () => {
  return (
    <div>
        <Image src={moviePosters} roundedCircle fluid />
    </div>
  )
}
