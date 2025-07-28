import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isDark, setIsDark] = useState(false);

  // ✅ Submit handler — connects to your backend
  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:4001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message || "Message sent successfully!");
        reset(); // clear form
      } else {
        toast.error(result.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to connect to server.");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const root = document.documentElement;

    if (savedTheme === 'dark') {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      setIsDark(false);
    }

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-white dark:bg-slate-900 dark:text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-800 dark:text-white shadow-md rounded-xl p-8 w-full max-w-md border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Contact Us</h2>

        <input
          type="text"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className="w-full mb-4 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white outline-none focus:border-pink-500"
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email"
            }
          })}
          className="w-full mb-4 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white outline-none focus:border-pink-500"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}

        <textarea
          rows="4"
          placeholder="Your Message"
          {...register("message", { required: "Message is required" })}
          className="w-full mb-4 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-slate-700 dark:text-white outline-none focus:border-pink-500 resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message.message}</p>}

        <button type="submit" className="w-full bg-pink-500 hover:bg-pink-700 text-white py-2 rounded-lg transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
