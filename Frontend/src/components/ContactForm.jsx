import React from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Handle form submission here, such as sending data to a server
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
        <div className="modal-box">
          <h3 className="font-bold text-lg mt-4 space-y-2">Contact Us</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full px-3 py-1 border rounded-md outline-none"
                {...register("message", { required: true })}
              />
              {errors.message && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

