import React, { useState } from 'react';
import "./contactform.scss"

const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         email: '',
//         message: '',
//     });

//     const [formErrors, setFormErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value,
//         }));
//     };

//     const validateForm = () => {
//         const errors = {};
//         if (!formData.fullName.trim()) {
//             errors.fullName = 'Full Name is required';
//         }
//         if (!formData.email.trim()) {
//             errors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             errors.email = 'Invalid email address';
//         }
//         if (!formData.message.trim()) {
//             errors.message = 'Message is required';
//         }
//         setFormErrors(errors);
//         return Object.keys(errors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             try {
//                 const response = await fetch('https://formsubmit.co/d.gondo@alustudent.com', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify(formData),
//                 });
//                 // Handle the response here (success or error)
//                 console.log('Form submitted successfully!');
//             } catch (error) {
//                 // Handle error here
//                 console.error('Form submission error:', error);
//             }
//         }
//     };

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (fullName.length === 0){
            alert("Please enter your Fullname");
        }
        else if (email.length === 0){
            alert("Please enter your email address")
        }
        else if (message.length === 0){
            alert("Please write a message to us.")
        }
        else{
            alert(`Thank you ${fullName}, we have received your message.`);
        }
    }

    return (
        
        <form onSubmit={handleSubmit} className="contact-form">
            <div className='formContainer'>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder='Enter your full name'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Enter your email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="tlabel">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Write your message...'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>

            </div>
        </form>
    );
};

export default ContactForm;
