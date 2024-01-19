import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Container from '../container/Container'

export default function Footer() {


    return (
        <Container>
            <section className="w-full relative overflow-hidden py-10 shadow  dark:bg-gray-800  dark:border-black">
                <div className="relative z-10 mx-auto max-w-7xl px-4">
                    <div className="-m-6 row flex flex-wrap dark:bg-gray-800  dark:border-black">
                        <div className="w-full col-6 p-6 md:w-1/2 lg:w-5/12">
                            <div className="flex h-full flex-col justify-between">
                                <div className="mb-4 inline-flex items-center">
                                    <Logo width="100px" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-white">
                                        &copy; Copyright 2024.Aniruddh Srivastava.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-3">
                                    <div className="w-full p-6 md:w-1/2 lg:w-2/12 dark:text-white">
                                        <div className="h-full">
                                            <h2 className=" mb-9  text-xs font-semibold uppercase  ">
                                                Contact
                                            </h2>
                                            <div className="col-2">
                                          <p><i class="fa fa-github" aria-hidden="true">Github</i></p></div>
                                          <div className="col-2"><p>Sri-Aniruddh</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="w-full  p-6 md:w-1/2 lg:w-2/12">
                                        <div className="h-full items-center">
                                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase dark:text-white">
                                                Support
                                            </h3>
                                            <ul >
                                                <li className="mb-4">
                                                    <Link
                                                        className=" text-base font-medium hover:text-gray-700"
                                                        to="/"
                                                    >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className="mb-4">
                                                    <Link
                                                        className=" text-base font-medium hover:text-gray-700"
                                                        to="/"
                                                    >
                                                        About
                                                    </Link>
                                                </li>
                                                <li className="mb-4">
                                                    <Link
                                                        className=" text-base font-medium hover:text-gray-700"
                                                        to="/contact"
                                                    >
                                                        Contact Us
                                                    </Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div></div>
                            </div></div>
                    </div>
                </div>
            </section>
        </Container>
    )
}
