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
    <Container>
        <header className="py-2 w-auto flex m-0 dark:bg-gray-900 dark:text-white mb-0 ">
          <nav className=" p-4">
            <div className="flex mx-auto mr-4 items-end ">
              <Link to='/'>
                <Logo width='70px' />

              </Link><h4 className='item-center mb-4 text-yellow-300 font-serif font-bold'>Portfolio</h4>

                <ul className='ml-auto d-flex flex-row justify-content-end'>
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
                  <ThemeBtn />

                </ul>
                
            </div>
          </nav>

        </header>
    </Container>
  )
}

export default Header