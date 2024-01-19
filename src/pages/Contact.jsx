import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Button, Input } from '../component/index'
import authService from '../appwrite/auth'


export default function Contact() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="relative flex items-top justify-center min-h-[700px]  dark:text-white dark:bg-gray-900 dark:border-gray-500 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 py-32 px-32  shadow-lg dark:shadow-lg bg-gray-200 rounded-xl dark:bg-opacity-1 dark:text-white dark:bg-gray-700 dark:border-gray-800 " >
                        <div className="p-12 dark:shadow-lg mr-2 bg-gray-300  rounded-xl shadow-lg dark:bg-opacity-1 dark:bg-gray-300  dark:text-black sm:rounded-lg">
                            <h1 className="text-3xl dark:text-gray-900 sm:text-4xl  font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 ">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide  font-semibold w-40">
                                    Lalupur Khas , Ganaga Ganj , Raebareli , UttarPradesh
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide dark:text-black font-semibold w-40">
                                    +91 9369927976
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide dark:text-black font-semibold w-40">
                                    srivastavaaniruddh@gmail.com
                                </div>
                            </div>
                        </div>
                        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                        <form onSubmit={handleSubmit(create)}>
                            <div className='space-y-5 mt-20'>
                                <Input
                                    label="Full Name: "
                                    placeholder="Enter your full name"
                                    {...register("name", {
                                        required: true,
                                    })}
                                />
                                <Input
                                    label="Email:"

                                    placeholder="Enter your email"
                                    type="email"
                                    {...register("email", {
                                        required: true,
                                        validate: {
                                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                                "Email address must be a valid address",
                                        }
                                    })}
                                />
                                <Input
                                    label="Mobile number: "
                                    type="tel"
                                    placeholder="Enter your password"
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                <Button type="submit" className="w-26">
                                    Submit
                                </Button><br /><br />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}