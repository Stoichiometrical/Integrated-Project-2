import React, { useState } from 'react';
import "./contactform.scss"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.fullName.trim()) {
            errors.fullName = 'Full Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('https://formsubmit.co/d.gondo@alustudent.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                // Handle the response here (success or error)
                console.log('Form submitted successfully!');
            } catch (error) {
                // Handle error here
                console.error('Form submission error:', error);
            }
        }
    };

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
                        value={formData.fullName}
                        onChange={handleChange}
                        className={formErrors.fullName ? 'error' : ''}
                    />
                    {formErrors.fullName && <span className="error-message">{formErrors.fullName}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Enter your email address'
                        value={formData.email}
                        onChange={handleChange}
                        className={formErrors.email ? 'error' : ''}
                    />
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message" className="tlabel">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Write your message...'
                        value={formData.message}
                        onChange={handleChange}
                        className={formErrors.message ? 'error' : ''}
                    />
                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </div>
                <div>
                <button type="submit">Submit</button>
                </div>

            </div>
        </form>
    );
};

export default ContactForm;
