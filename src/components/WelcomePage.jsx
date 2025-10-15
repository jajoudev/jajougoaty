export default function WelcomePage({ onClick }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center w-full bg-blue-950" onClick={onClick}>
            <h1 className="text-blue-400 text-center font-bold text-9xl mb-8">Welcome to my page !</h1>
            <p className="text-center text-2xl text-white">Click anywhere to continue :D</p>
        </div>
    )
}