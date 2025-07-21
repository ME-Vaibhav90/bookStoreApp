import React from 'react'
import { Link } from 'react-router-dom'
import Login from './login'
import { useForm } from 'react-hook-form'

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="w-[380px] border-[1px] p-4 rounded-md border-gray-300 shadow-md">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg">Signup :-</span>
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost">✕</Link>
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Name</span><br />
                            <input
                                type="text"
                                placeholder="Enter your name"
                                autoComplete="name"
                                className="w-80 px-3 mt-2 border rounded-md outline-none"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-red-600 text-sm">This field is required</span>}
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Email</span><br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                autoComplete="email"
                                className="w-80 px-3 mt-2 border rounded-md outline-none"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-600 text-sm">This field is required</span>}
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Password</span><br />
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-80 px-3 mt-2 border rounded-md outline-none"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-600 text-sm">This field is required</span>}
                        </div>

                        <div className="flex justify-around mt-4 items-center">
                            <button
                                type="submit"
                                className="bg-pink-500 text-white border rounded-md outline-none px-4 py-1 hover:bg-pink-900"
                            >
                                Signup
                            </button>

                            <p className="mt-2 text-sm">
                                Have an account?{" "}
                                <span
                                    onClick={() => document.getElementById("my_modal_3").showModal()}
                                    className="underline text-blue-500 cursor-pointer"
                                >
                                    Login
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* Login modal rendered outside form */}
            <Login />
        </>
    )
}

export default Signup;