
import React from 'react'
import Container from './container/Container'
import bg from './image/me.png'
import JS from './image/JSC.png'
import MSQL from './image/MSQL.jpeg'
import ViteReact from './image/ViteReact.jpeg'
import BSTP from './image/BSTP.jpeg'
import TLWND from './image/TLWND.jpeg'
import Csharp from './image/Csharp.jpeg'
import ASP from './image/ASP.jpeg'
import html from './image/html.jpeg'
import CSS from './image/CSS.jpeg'
import C from './image/C.jpeg'
import Python from './image/Python.jpeg'
import mysql from '../../src/component/image/mysql.jpeg'
import crncy from './image/crncy.jpeg'
import twit from './image/twit.jpeg'
import { useNavigate } from 'react-router-dom'


export function Banner() {
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Contact',
      slug: "/contact",

    },]

  return (
    <Container>
      <div className='w-full'>
        {/* //banner */}
        <div className=' flex  items-center bg-black text-start'>
          <div id='text' className=' relative ml-20 text-white'>
            <h6>Hello,</h6>
            <h1 className='font-bold  text-yellow-300'>I'm Aniruddh</h1>
            <h3 className='font-bold '>Web Developer</h3>
            <p>I'm a skilled and passinate web developer with creating visually appelling and eco-friendly website.</p>
            <button type="button" className='rounded btn btn-warning '
              onClick={() => navigate('/contact')}><i className="fa fa-user-circle-o" aria-hidden="true">Contact US</i>
            </button>
          </div>

          <img
            className='w-full h-full relative  ml-auto'
            src={bg} alt="bg not found" />
        </div>

        {/* //skill */}
        <h2 className=' font-bold dark:text-white font-sans underline  pt-40 pb-20'>My Skills</h2>
       
          <div className="row">
            <div className="col-3">
              <div className="w-60 shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={ViteReact}
                  alt="vitereact"
                  className="h-40 w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">VITE + React</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="w-60 shadow dark:shadow-xl dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={JS}
                  alt="js"
                  className="h-40 w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">Java Script</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="w-60 shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={MSQL}
                  alt="MSQL"
                  className="h-50 w-Full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">MSQL</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="w-60 shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={BSTP}
                  alt="Laptop"
                  className="h-50 w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">Bootstrap</h1>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-3">
              <div className="w-60  shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={TLWND}
                  alt="Laptop"
                  className="h-36 w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">Tailwind</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="w-60 shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={Csharp}
                  alt="Laptop"
                  className="h-36 w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">C#</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="w-60 shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={ASP}
                  alt="Laptop"
                  className="h-36 w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">ASP.NET</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="w-60 shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={html}
                  alt="Laptop"
                  className="h-36 w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">HTML</h1>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-3">
              <div className="w-60 shadow dark:shadow-lg  dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={CSS}
                  alt="Laptop"
                  className="h-50 w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">CSS</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="w-60 shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={C}
                  alt="Laptop"
                  className="w-full h-36 rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">C</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="w-60 shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={Python}
                  alt="Laptop"
                  className="h-50 w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">Python</h1>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="w-60 shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
                <img
                  src={mysql}
                  alt="Laptop"
                  className="h-50 w-full rounded-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg  font-semibold">MYSql</h1>
                </div>
              </div>
            </div>
          </div>
          <br />
        
        {/* Projects */}
        <h2 className=' font-bold dark:text-white font-sans underline pt-40 pb-20'>Projects</h2>
        <div className='row mb-5'>
          <div className="col-6">
            <div className="w-full shadow dark:shadow-lg  dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img
                src={crncy}
                alt="currency convertor"
                className="h-60  w-full rounded-md object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Currency Convertor</h1>
                <p className="mt-3 text-sm text-gray-600 dark:text-white">
                  t provides a quick and easy way to find the equivalent value of a specific amount in different currencies.
                </p>
                <button
                  type="button"
                  className="mt-4 btn btn-warning rounded-sm  dark:bg-white px-32 py-2 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  href=' https://currency-prject.vercel.app/'
                ><a href='https://currency-prject.vercel.app/'> Go</a>

                </button>
              </div>
            </div>
          </div>
          
          <div className="col-6">
            <div className="w-full shadow dark:shadow-lg  dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img
                src={twit}
                alt="currency convertor"
                className="h-60  w-full rounded-md object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Twitter Clone </h1>
                <p className="mt-3 text-sm text-gray-600 dark:text-white">
                  Here you add your post like a twit and it active twit will shown to every one and inactive twit you can se.
                </p>
                <button
                  type="button"
                  className="mt-4 btn btn-warning rounded-sm  dark:bg-white px-32 py-2 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  href='https://twitter-blog-iota.vercel.app/'
                ><a href='https://twitter-blog-iota.vercel.app/'> Go</a>

                </button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </Container>
  )
}
