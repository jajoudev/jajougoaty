import ProfileContainer from "./ProfileContainer";
import TextType from "./animations/TextType"

export default function Profile({ url }) {
    return (
        <ProfileContainer>
            <img className="rounded-full text- w-56" src={url} alt="My profile Photo !" />
            <div className="mt-4">
                <TextType
                    text={["JajouGoat", "Jajou64", ""]}
                    typingSpeed={75}
                    textColors={["text-black"]}
                    className="text-2xl"
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|" 
                    />
            </div>
        </ProfileContainer>
    )
}