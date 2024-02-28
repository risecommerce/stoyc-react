import React from 'react'
import '../enquiry.css'
const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, phone, company, budget, goals, interests } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            company: company.value,
            budget: budget.value,
            goals: goals.value,
    interests: interests.value
        }
        console.log(conFom);
    }
    return (
        <section className="contact-form-wrap pb-5" id="inquiry">

       
            <div className="container">
            
            
                

                <form id="contact-form" className="contact__form "  onSubmit={onSubmit}>
                 
                

                    <div className="up">You're interested in</div>
                    <ul className="services list-unstyled d-flex flex-wrap ">
                        <li className="form-group">
                            <input id="Social" name="interests[]" type="checkbox"
                                value="Social Media	Management   &amp; Optimization"/>
                                <label htmlFor="Social">Social Media
                                    Management &amp; Optimization</label>
                        </li>
                        <li className="form-group">
                            <input id="digital" name="interests[]" type="checkbox" value="Digital Marketing" />
                                <label htmlFor="digital"> Digital Marketing</label>
                        </li>
                        <li className="form-group">
                            <input id="branding" name="interests[]" type="checkbox" value="Branding and Identity"/>
                                <label htmlFor="branding">Branding and Identity</label>
                        </li>
                        <li className="form-group">
                            <input id="design" name="interests[]" type="checkbox" value="Website Design and Development"/>
                                <label htmlFor="design">Website Design and Development</label>
                        </li>
                        <li className="form-group">
                            <input id="creation" name="interests[]" type="checkbox" value="Content Creation"/>
                                <label htmlFor="creation">Content Creation</label>
                        </li>
                        <li className="form-group">
                            <input id="strategy" name="interests[]" type="checkbox"
                                value="Brand Strategy htmlFor Start-Ups"/>
                                <label htmlFor="strategy">Brand Strategy htmlFor Start-Ups</label>
                        </li>
                        <li className="form-group">
                            <input id="SEO" name="interests[]" type="checkbox" value="Search Engine Optimization (SEO)"/>
                                <label htmlFor="SEO">Search Engine Optimization (SEO)</label>
                        </li>
                        <li className="form-group">
                            <input id="marketing" name="interests[]" type="checkbox"
                                value="Local Independent Business Marketing"/>
                                <label htmlFor="marketing">Local Independent Business Marketing</label>
                        </li>
                        <li className="form-group">
                            <input id="sms" name="interests[]" type="checkbox" value="email and sms marketing"/>
                                <label htmlFor="sms">Email and SMS Marketing</label>
                        </li>

                    </ul>
                    <div className="up">More about you</div>
                    <ul className="info list-unstyled ">

                        <li className="large form-group">
                            <input id="name" name="name" type="text" required />

                                <label htmlFor="name">Name</label>
                                
                        </li>
                        <li className="small form-group">
                            <input id="email" name="email" type="text" required />

                                <label htmlFor="email">Email</label>
                                
                        </li>
                        <li className="small form-group">
                            <input id="phone" name="phone" type="text" required />

                                <label htmlFor="phone">Phone</label>
                                
                        </li>
                        <li className="small form-group">
                            <input id="company" name="company" type="text"/>

                                <label htmlFor="company">Company Name</label>
                                
                        </li>
                        <li className="small form-group">
                            <input id="budget" name="budget" type="text"/>

                                <label htmlFor="budget">Estimated Budget</label>
                                
                        </li>
                        <li className="large form-group">
                            <textarea id="goals" name="goals"></textarea>

                            <label htmlFor="goals">Your Partnership Goals</label>
                        
                        </li>

                    </ul>

                    <button className="btn btn-main mb-5" type="submit">
                        {formStatus}
                    </button>
                  


                </form>

            </div>
        </section>
    )
}
export default ContactForm