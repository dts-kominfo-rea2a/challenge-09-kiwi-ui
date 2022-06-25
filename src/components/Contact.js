// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({ props }) => {
    return (
        <>
        <div className='card'>
            <img src={props.photo} alt='ini foto kucing' className='contact-image'></img>        
                <div className='contact-info'>
                    <h3 className='contact-name'>{props.name}</h3>
                    <h3 className='contact-phone'>{props.phone}</h3>
                    <h3 className='contact-email'>{props.email}</h3>

            </div>
            </div>
        </>
    )
}

export default Contact;