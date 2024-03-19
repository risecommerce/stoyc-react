import React, { useState } from 'react'
import axios from 'axios'
import '../enquiry.css'
const ContactForm = () => {

    const [formData, setFormData] = useState({
        interests: [],
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        goals: ''
    });

    const [formStatus, setFormStatus] = useState('Submit'); // Initial form status

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const updatedInterests = checked
                ? [...formData.interests, value]
                : formData.interests.filter(item => item !== value);
            setFormData({ ...formData, interests: updatedInterests });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setFormStatus('Sending...'); // Update form status when sending

        try {
            const response = await axios.post('https://stoyc.com/mail.php', formData);
            console.log(response.data); // Handle success response
            setFormStatus('Sent'); // Update form status after successful submission
        } catch (error) {
            console.error('Error:', error); // Handle error response
            setFormStatus('Error'); // Update form status in case of error
        }
    };
    return (
        <section className="contact-form-wrap pb-5" id="inquiry">

       
            <div className="container">
            
            
                

                <form id="contact-form" className="contact__form " onSubmit={handleSubmit}>
                 
                

                    <div className="up">You're interested in</div>
                    <ul className="services list-unstyled d-flex flex-wrap ">
                        <li className="form-group">
                            <input onChange={handleChange} id="Social" name="interests[]" type="checkbox"
                                value="Social Media	Management   &amp; Optimization"/>
                                <label htmlFor="Social">Social Media
                                    Management &amp; Optimization</label>
                        </li>
                        <li className="form-group">
                            <input onChange={handleChange} id="digital" name="interests[]" type="checkbox" value="Digital Marketing" />
                                <label htmlFor="digital"> Digital Marketing</label>
                        </li>
                        <li className="form-group">
                            <input onChange={handleChange} id="branding" name="interests[]" type="checkbox" value="Branding and Identity"/>
                                <label htmlFor="branding">Branding and Identity</label>
                        </li>
                        <li className="form-group">
                            <input onChange={handleChange} id="design" name="interests[]" type="checkbox" value="Website Design and Development"/>
                                <label htmlFor="design">Website Design and Development</label>
                        </li>
                        <li className="form-group">
                            <input onChange={handleChange} id="creation" name="interests[]" type="checkbox" value="Content Creation"/>
                                <label htmlFor="creation">Content Creation</label>
                        </li>
                        <li className="form-group">
                            <input onChange={handleChange} id="strategy" name="interests[]" type="checkbox"
                                value="Brand Strategy htmlFor Start-Ups"/>
                                <label htmlFor="strategy">Brand Strategy htmlFor Start-Ups</label>
                        </li>
                        <li className="form-group">
                            <input onChange={handleChange} id="SEO" name="interests[]" type="checkbox" value="Search Engine Optimization (SEO)"/>
                                <label htmlFor="SEO">Search Engine Optimization (SEO)</label>
                        </li>
                        <li className="form-group">
                            <input onChange={handleChange} id="marketing" name="interests[]" type="checkbox"
                                value="Local Independent Business Marketing"/>
                                <label htmlFor="marketing">Local Independent Business Marketing</label>
                        </li>
                        <li className="form-group">
                            <input onChange={handleChange} id="sms" name="interests[]" type="checkbox" value="email and sms marketing"/>
                                <label htmlFor="sms">Email and SMS Marketing</label>
                        </li>

                    </ul>
                    <div className="up">More about you</div>
                    <ul className="info list-unstyled ">

                        <li className="large form-group">
                            <input onChange={handleChange} id="name" name="name" type="text" required  placeholder="Name"/>

                                {/* <label htmlFor="name">Name</label> */}
                                
                        </li>
                        <li className="small form-group">
                            <input onChange={handleChange} id="email" name="email" type="text" required placeholder="Email"/>

                                 {/* <label htmlFor="email">Email</label> */}
                                
                        </li>
                        <li className="small form-group">
                            <input onChange={handleChange} id="phone" name="phone" type="text" required placeholder="Phone"/>

                                {/* <label htmlFor="phone">Phone</label> */}
                                
                        </li>
                        <li className="small form-group">
                            <input onChange={handleChange} id="company" name="company" type="text" placeholder="Company Name"/>

                                {/* <label htmlFor="company">Company Name</label> */}
                                
                        </li>
                        <li className="small form-group">
                            <input onChange={handleChange} id="budget" name="budget" type="text" placeholder="Estimated Budget"/>

                                {/* <label htmlFor="budget">Estimated Budget</label> */}
                                
                        </li>
                        <li className="large form-group">
                            <textarea onChange={handleChange}  id="goals" name="goals" placeholder="Your Partnership Goals"></textarea>

                            {/* <label htmlFor="goals">Your Partnership Goals</label> */}
                        
                        </li>

                    </ul>

                    <button className="btn btn-main mb-5" type="submit" disabled={formStatus === 'Sending...' || formStatus === 'Sent'}>
                        {formStatus}
                    </button>
                  


                </form>

            </div>
        </section>
    )
}
export default ContactForm