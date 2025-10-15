import { useState } from "react"

import Profile from "./components/Profile"
import Links from "./components/Links"
import WelcomePage from "./components/WelcomePage"

import ProfileImg from "../public/images/profile.jpg"

export default function App() {
  const [showElement, setShowElement] = useState(false)

  return (
    <>
      {!showElement ? (
        <WelcomePage onClick={() => setShowElement(true)}/>
      ) : (
        <main className="flex flex-col items-center justify-center min-h-screen">
          <Profile url={ProfileImg} />
          <Links />
        </main>
      )}
    </>
  )
}