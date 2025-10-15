import SplitText from "./animations/SplitText";

export default function WelcomePage({ onClick }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center w-full bg-blue-950 overflow-hidden" onClick={onClick}>
            <SplitText
                text="Welcome to my page!"
                className="text-blue-400 text-center font-bold text-9xl mb-8"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />
            <p className="text-center text-2xl text-white">Click anywhere to continue :D</p>
        </div>
    )
}