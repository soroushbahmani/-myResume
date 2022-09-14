import React from 'react'
import CV from '../../assets/cv.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download  className='btn'>download cv</a>
        <a href='#contact' className='btn btn-primary'>lets talk</a>
    </div>
  )
}

export default CTA