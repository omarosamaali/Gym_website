import React from 'react'

function Contact () {
  return (
    <div id='contact'>
        <h1>Contact Us</h1>
            <form>
                <input type='text' placeholder='Full Name' required/>
                <input type='email' placeholder='Type Your Email' required/>
                <textarea placeholder='Write Here.......' name='message'/>
                <input type='submit' value='Send' />
            </form>
    </div>
  )
}

export default Contact
