import React from "react";
import Hero from "../components/Hero";
import ContactForm from "../components/Contact";

const Contact = () => {
  return (
    <div className="">
      <Hero
        heading="Contact us"
        message="Submit the form below and we will get back to you"
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
