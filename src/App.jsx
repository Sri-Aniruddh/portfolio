import { useState, useEffect } from 'react'
import './App.css'
import ThemeBtn from './component/Themebtn'
import { ThemeProvider } from './context/theme'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './component'
import { Outlet } from 'react-router-dom'


function App() {

  //theme changer start
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  //theme changer end


  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])



  return !loading ? (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
          </div>
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          
        </div>
      </div>

    </ThemeProvider>
  ) : null
}

export default App
