import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ThemeBtn from '../Themebtn'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Contact",
      slug: "/contact",
      active: !authStatus,
    },
    // {
    //   name: "Login",
    //   slug: "/login",
    //   active: !authStatus,
    // },
    // {
    //   name: "Signup",
    //   slug: "/signup",
    //   active: !authStatus,
    // },

  ]


  return (
    <div className="w-full flex m-0 dark:bg-gray-900 dark:text-white mb-0">

      <header className="py-2 m-0 w-full border   shadow">
        <Container >
          <nav className='flex w-full relative dark:bg-gray-800'>
            <div className='mr-4 col-2 flex items-end mx-0'>
              <Link to='/'>
                <Logo width='70px' />

              </Link><h4 className='item-center mb-4 text-yellow-300 font-serif font-bold'>Portfolio</h4>
            </div>
            <div className='col-10 flex'>
              <ul className='flex ml-auto m-6 '>
                {navItems.map((item) =>
                  item.active ? (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className='inline-bock px-6 py-2 duration-200 hover:bg-yellow-400 rounded-full'
                      >{item.name}</button>
                    </li>
                  ) : null
                )}
                {/* {authStatus && (
                    <li>
                      <LogoutBtn />
                    </li>
                  )} */}

                <ThemeBtn />

              </ul>
            </div>
          </nav>
        </Container>
      </header>
    </div>
  )
}

export default Header