
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
import appW from './image/appW.jpeg';



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
      <div className='w-auto'>
        {/* //banner */}
        <div className='items-center flex bg-black text-start'>
          <div id='text' className=' relative ml-auto text-white'>
            <h6>Hello,</h6>
            <h1 className='font-bold  text-yellow-300'>I'm Aniruddh</h1>
            <h3 className='font-bold '>Web Developer</h3>
            <p>I'm a skilled and passinate web developer with creating visually appelling and eco-friendly website.</p>
            <button type="button" className='rounded btn btn-warning '
              onClick={() => navigate('/contact')}><i className="fa fa-user-circle-o" aria-hidden="true">Contact US</i>
            </button>
          </div>

          <img
            className='w-auto float-sm-end float-sm-end h-full relative  ml-auto'
            src={bg} alt="bg not found" />
        </div>
        {/* //skill */}
        <h2 className=' font-bold dark:text-white font-sans underline text-center pt-40 pb-20'>My Skills</h2>

        <div className="flex flex-wrap -mx-2">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={ViteReact} alt="vitereact" className="h-32 w-full rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold ">VITE + React</h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-xl dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={JS} alt="js" className="h-32 w-full rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold">JavaScript</h1>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={MSQL} alt="MSQL" className="h-32 w-full rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold">MSQL</h1>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={BSTP} alt="Laptop" className="h-32 w-full rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold">Bootstrap</h1>
            </div>
          </div>

          {/* Card 5 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={TLWND} alt="Laptop" className="w-full h-32 rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold">Tailwind</h1>
            </div>
          </div>

          {/* Card 6 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={Csharp} alt="Laptop" className="h-32 w-full rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold">C#</h1>
            </div>
          </div>

          {/* Card 7 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={ASP} alt="Laptop" className="h-32 w-full rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold">ASP.NET</h1>
            </div>
          </div>

          {/* Card 8 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={html} alt="Laptop" className="h-32 w-full rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold">HTML</h1>
            </div>
          </div>

          {/* Card 9 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={CSS} alt="Laptop" className="h-32 w-full rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold">CSS</h1>
            </div>
          </div>

          {/* Card 10 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={C} alt="Laptop" className="h-32 w-full rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold">C</h1>
            </div>
          </div>

          {/* Card 11 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={Python} alt="Laptop" className="h-32 w-full rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold">Python</h1>
            </div>
          </div>

          {/* Card 12 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4">
            <div className="w-full  p-4 shadow-md dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={appW} alt="Laptop" className="h-32 w-full rounded-sm object-cover mb-4" />
              <h1 className="text-lg font-semibold">App-Write Services</h1>
            </div>
          </div>
        </div>

        <br />

        {/* Projects */}
        <h2 className=' font-bold text-center dark:text-white font-sans underline pt-40 pb-20'>Projects</h2>
        <div className="flex flex-wrap -mx-4 mb-5">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <div className="w-full shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={crncy} alt="currency converter" className="h-60 w-full rounded-md object-cover" />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Currency Converter</h1>
                <p className="mt-3 text-sm text-gray-600 dark:text-white">
                  Provides a quick and easy way to find the equivalent value of a specific amount in different currencies.
                </p>
                <a
                  href="https://currency-prject.vercel.app/"
                  className="mt-4 btn btn-warning rounded-sm px-8 py-2 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <div className="w-full shadow dark:shadow-lg dark:bg-gray-700 dark:border-black dark:text-white rounded-md border">
              <img src={twit} alt="Twitter Clone" className="h-60 w-full rounded-md object-cover" />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Twitter Clone</h1>
                <p className="mt-3 text-sm text-gray-600 dark:text-white">
                  Share your posts like a tweet. Active tweets will be shown to everyone, and you can see inactive tweets.
                </p>
                <a
                  href="https://twitter-blog-iota.vercel.app/"
                  className="mt-4 btn btn-warning rounded-sm px-8 py-2 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Go
                </a>
              </div>
            </div>
          </div>
        </div>



      </div>
    </Container>
  )
}
