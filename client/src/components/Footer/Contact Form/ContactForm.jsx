import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xqkvqawb");
  if (state.succeeded) {
      return <p>Thanks for your message!</p>;
  }
  return (
      <form className={style.formContainer} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        className={style.input}
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        className={style.textarea}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className={style.btnSubmit} type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
