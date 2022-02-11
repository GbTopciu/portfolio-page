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
    <div className="w-full max-w-6xl h-full p-8">
      <form onSubmit={handleSubmit(handleMessageForm)} className="h-screen ">
        {/* Name Area */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3 md:h-1/3">
            <label className="block text-slate-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-slate-200 appearance-none border-2 border-slate-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-900"
              name="name"
              {...register("name", registerOptions.name)}
              type="text"
              placeholder="Full Name"
            />
            <small className="text-red-500">
              {errors?.name && errors.name.message}
            </small>
          </div>
        </div>
        {/* Name Area */}

        {/* Email Area */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-slate-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-slate-200 appearance-none border-2 border-slate-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-900"
              name="email"
              type="email"
              placeholder="Email Address"
              {...register("email", registerOptions.email)}
            />
            <small className="text-red-500">
              {errors?.email && errors.email.message}
            </small>
          </div>
        </div>
        {/* Email Area */}

        {/* Message Area */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-slate-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Message
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea
              className="bg-slate-200 appearance-none border-2 border-slate-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-900"
              name="msg"
              {...register("msg", registerOptions.message)}
              type="text"
              placeholder="Your Message"
            ></textarea>
            <small className="text-red-500">
              {errors?.msg && errors.msg.message}
            </small>
          </div>
        </div>
        {/* Message Area */}

        {/* Button */}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3 items-center">
            <button
              className="shadow bg-slate-500 hover:bg-slate-900 border-2 border-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded focus:border-slate-900"
              type="submit"
            >
              Message
            </button>
          </div>
        </div>
        {/* Button */}
      </form>
    </div>
  );
};

export default Contact;
