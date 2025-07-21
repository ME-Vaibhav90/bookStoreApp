import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log('Before submit, root classes:', document.documentElement.className);
        console.log(data);

        // Save current theme to localStorage to persist it
        const root = document.documentElement;
        if (root.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        // Prevent page reload or navigation on form submit
        console.log('After submit, root classes:', document.documentElement.className);
    };

    const navigate = useNavigate();

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // On mount, read theme from localStorage and apply to root element
        const savedTheme = localStorage.getItem('theme');
        const root = document.documentElement;
        if (savedTheme === 'dark') {
            root.classList.add('dark');
            setIsDark(true);
        } else {
            root.classList.remove('dark');
            setIsDark(false);
        }

        // Observe changes to the root element's class list to update theme dynamically
        const observer = new MutationObserver(() => {
            setIsDark(root.classList.contains('dark'));
        });
        observer.observe(root, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect();
    }, []);

    const handleClose = () => {
        const dialog = document.getElementById("my_modal_3");
        if (dialog) {
            dialog.close();
        }
        // Removed navigation to preserve theme state
        // navigate('/'); // Redirect to home when the close button is clicked
    };

    return (
        <div >
            <dialog id="my_modal_3" className={`modal ${isDark ? 'dark' : ''}`} >
                <div className="modal-box relative bg-white dark:bg-slate-900 dark:text-white">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>✕</button>
                    <span className="font-bold text-lg">Login</span>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-4 space-y-4">
                            <span>Email</span>
                            <br />
                            <input type="email" placeholder='Enter your email' autoComplete="email" className="w-80 px-3 mt-2 border rounded-md outline-none"
                                {...register("email", { required: true })}
                                />
                                <br />
                            {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
                                
                        </div>
                        <div className="mt-4 space-y-4">
                            <span>Password</span>
                            <br />
                            <input type="password" placeholder='Enter password' className="w-80 px-3 mt-2 border rounded-md outline-none"
                                {...register("password", { required: true })}
                                />
                                <br />
                            {errors.password && <span className="text-red-600 text-sm">This field is required</span>}
                                

                        </div>
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className="bg-pink-500 text-white border rounded-md outline-none px-4 py-1 hover:bg-pink-900">Login</button>
                            <div className="mt-2">Not registered?{" "}
                                <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default login