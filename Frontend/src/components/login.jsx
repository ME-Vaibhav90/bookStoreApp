import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    const [isDark, setIsDark] = useState(false);

    const { authUser, setAuthUser } = useAuth();

    const onSubmit = async (data) => {
        try {
            const root = document.documentElement;

            // Save current theme preference
            localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');

            const userInfo = {
                email: data.email,
                password: data.password,
            };

            const res = await axios.post("http://localhost:4001/user/login", userInfo);

            if (res.data && res.data.user) {
                const userData = {
                    fullname: res.data.user.fullname,
                    email: res.data.user.email,
                };

                // ✅ Use consistent key
                localStorage.setItem("Users", JSON.stringify(userData));
                setAuthUser(userData);

                toast.success('Logged in Successfully!');
                navigate('/');
            }
        } catch (err) {
            if (err.response && err.response.data) {
                toast.error("Error: " + err.response.data.msg);
            } else {
                toast.error("Something went wrong during login.");
            }
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

    const handleClose = () => {
        const dialog = document.getElementById("my_modal_3");
        if (dialog) dialog.close();
    };

    return (
        <div>
            <dialog id="my_modal_3" className={`modal ${isDark ? 'dark' : ''}`}>
                <div className="modal-box relative bg-white dark:bg-slate-900 dark:text-white">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleClose}>✕</button>
                    <span className="font-bold text-lg">Login</span>
                    <br />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-4 space-y-4">
                            <span>Email</span><br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                autoComplete="email"
                                className="w-80 px-3 mt-2 border rounded-md outline-none"
                                {...register("email", { required: true })}
                            />
                            <br/>
                            {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
                        </div>
                        <div className="mt-4 space-y-4">
                            <span>Password</span><br />
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-80 px-3 mt-2 border rounded-md outline-none"
                                {...register("password", { required: true })}
                            />
                              <br/>
                            {errors.password && <span className="text-red-600 text-sm">This field is required</span>}
                        </div>
                        <div className="flex justify-around mt-4">
                            <button type="submit" className="bg-pink-500 text-white border rounded-md outline-none px-4 py-1 hover:bg-pink-900">Login</button>
                            <div className="mt-2">Not registered?{" "}
                                <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;