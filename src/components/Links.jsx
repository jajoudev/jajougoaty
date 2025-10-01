import LinksContainer from "./LinksContainer";

const LinksData = [
    {
        id: "1",
        url: ""
    }
]

export default function Links({ url, content }) {
    return (
        <LinksContainer>
            <ul>
                <li><a href={url}>{content}</a></li>
            </ul>
        </LinksContainer>
    )
}