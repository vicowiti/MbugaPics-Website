import React from "react";

const ContactForm = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4 ">
        Lets talk about your next adventure
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full "
          placeholder="Message"
          cols={30}
          rows={10}
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2  hover:bg-black hover:text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
