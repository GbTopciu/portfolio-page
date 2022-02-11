import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleMessageForm = (data) => console.log(data);

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    message: {
      required: "Message is required",
      minLength: {
        value: 8,
        message: "Message must contain at least 8 characters",
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
    <form className="flex flex-col justify-center w-96 md:w-2/3 lg:w-1/3 h-3/4 p-4 shadow-2xl " onSubmit={handleSubmit(handleMessageForm)}>
    <h2 className="flex justify-center mb-10 text-slate-900 font-bold text-lg">Contact Form</h2>
      {/* Name Area */}
      <div className="mb-6">
        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
          Name
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="name"
          {...register("name", registerOptions.name)}
          type="text"
          placeholder="Full Name"
        />
        <small className="text-red-500">
          {errors?.name && errors.name.message}
        </small>
      </div>

      {/* Name Area */}

      {/* Email Area */}
      <div className="mb-6">
        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
          Email
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="email"
          type="email"
          placeholder="Email Address"
          {...register("email", registerOptions.email)}
        />
        <small className="text-red-500">
          {errors?.email && errors.email.message}
        </small>
      </div>
      {/* Email Area */}

      {/* Message Area */}
      <div className="mb-10">
        <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
          Message
        </label>

        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-3/4 md:h-4/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="msg"
          {...register("msg", registerOptions.message)}
          type="text"
          placeholder="Your Message"
        ></textarea>
        <small className="text-red-500">
          {errors?.msg && errors.msg.message}
        </small>
      </div>
      {/* Message Area */}

      {/* Button */}
      <div>
      <button
        className="text-white bg-slate-500 hover:bg-slate-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="submit"
      >
        Message
      </button>
      </div>
      {/* Button */}
    </form>
    </div>
  );
};

export default Contact;
