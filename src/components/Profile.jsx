import ProfileContainer from "./ProfileContainer";
import TypewriterComponent from "typewriter-effect";

export default function Profile({ url }) {
    return (
        <ProfileContainer>
            <img className="rounded-full w-56" src={url} alt="My profile Photo !" />
            <div className="mt-4">
                <TypewriterComponent options={{
                    strings: ["JajouGoaty", "Jajou"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-2xl font-semibold"
                }}/>
                <TypewriterComponent options={{
                    strings: ["Young Creative Artist", "6 7", "French Content Creator", "French Web Developer", "Roblox Speedruner", "Roblox Developer Jr.", "Website developed by me :D"],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "font-medium",
                }}/>
            </div>
        </ProfileContainer>
    )
}