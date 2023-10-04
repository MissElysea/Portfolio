import React, { useRef } from 'react';
import styles from './Contact.module.scss';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    try {
      await emailjs.send(
        'service_k2rmucx', 
        'template_u5nb63o', 
        formData,
        'cz75sECgMUK8ntMQw' 
      );

      alert('Form submitted successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again later.'); 
    }
  };

  return (
    <div>
      <h1 className={styles.contactHeading}>Contact</h1>
      <div className={styles.contactContainer}>
        <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className={styles.contactInput} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={styles.contactInput} required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" className={styles.contactTextarea} required></textarea>
        </div>
          <button type="submit" className={styles.contactButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;