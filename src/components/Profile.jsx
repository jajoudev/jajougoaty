import ProfileContainer from "./ProfileContainer";

export default function Profile({ url }) {
    return (
        <ProfileContainer>
            <img className="rounded-full w-56" src={url} alt="My profile Photo !" />
            <div className="mt-4">
                <h2>JajouGoat</h2>
                <span>Young Creative Artist 6 7</span>
            </div>
        </ProfileContainer>
    )
}