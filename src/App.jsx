import Profile from "./components/Profile"
import Links from "./components/Links"

import ProfileImg from "../public/images/profile.jpg"

export default function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <Profile url={ProfileImg} />
        <Links url="#" content="Test"/>
      </main>
    </>
  )
}