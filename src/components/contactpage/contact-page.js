import React, { useState } from "react";
import "./contact.styles.css";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { motion } from "framer-motion";

const ContactPage = () => {
  const { register, errors, handleSubmit, reset } = useForm();
  const [isSending, setIsSending] = useState(false);

  const toastifySuccess = () => {
    toast("Thanks i will get back to you asap !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      style: { backgroundColor: "orange", color: "white" },
      draggable: false,
      className: "success",
      toastId: "notifyToast",
    });
  };
  const onSubmit = async (data) => {
    try {
      const templateParams = {
        reply_to: "osas.edok@yahoo.co.uk",

        name: data.name,
        email: data.email,
        message: data.message,
      };
      setIsSending(true);
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      setIsSending(false);
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  const pageVariant = {
    in: { opacity: 1 },
    out: { opacity: 0.7 },
    transition: { duration: 0.5, type: "spring", stiffness: 50 },
  };

  return (
    <motion.div
      className="contactpage-container"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
    >
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          required
          className="form-input"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          ref={register({
            required: { value: true, message: "Please enter your name" },
            maxLength: {
              value: 30,
              message: "Please use 30 characters or less",
            },
          })}
        />
        {errors.name && (
          <span className="errorMessage">{errors.name.message}</span>
        )}
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          required
          className="form-input"
          type="email"
          name="email"
          id="email"
          ref={register({
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          placeholder="Your email address"
        />
        {errors.email && (
          <span className="errorMessage">
            Please enter a valid email address
          </span>
        )}
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          required
          className="form-input form-message"
          name="message"
          id=""
          cols="30"
          rows="10"
          ref={register({
            required: true,
          })}
          placeholder="Message"
        ></textarea>
        {errors.message && (
          <span className="errorMessage">Please enter a message</span>
        )}
        {isSending && <div className="is-sent-progress-bar"></div>}
        <button className="form-btn" type="submit">
          SEND
        </button>
      </form>
      <ToastContainer />
    </motion.div>
  );
};

export default ContactPage;
