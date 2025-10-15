import LinksContainer from "./LinksContainer";
import "../css/Links.css"

import { GrYoutube } from "react-icons/gr";
import { FaTwitch, FaDiscord, FaTrophy } from "react-icons/fa";

const LinksData = [
    {
        id: "1",
        url: "https://www.youtube.com/@JajouGoat",
        content: "Youtube",
        css: {
            color: "bg-red-500",
        },
        component: <GrYoutube size={30} />
    },
    {
        id: "2",
        url: "https://www.twitch.tv/jajougoat",
        content: "Twitch",
        css: {
            color: "bg-purple-500",
        },
        component: <FaTwitch sizez={30} />

    },
    {
        id: "3",
        url: "https://discord.gg/dkvJGZuy",
        content: "Discord",
        css: {
            color: "bg-blue-500"
        },
        component: <FaDiscord size={30} />
    },
    {
        id: "4",
        url: "https://www.speedrun.com/users/JajouGoaty",
        content: "Speedrun",
        css: {
            color: "bg-yellow-500"
        },
        component: <FaTrophy size={30} />
    }

]


export default function Links() {
    return (
        <LinksContainer>
            <ul className="flex flex-col justify-center items-center">
                {LinksData.map((link) => (
                    <li key={link.id}>
                        <a className={`flex items-center justify-center gap-3 text-center w-96 mt-6 py-6 rounded-2xl text-white text-2xl font-medium ${link.css.color}`} href={link.url}>
                            {link.content}
                            {link.component}
                        </a>
                    </li>
                ))
                }
            </ul>
        </LinksContainer >
    )
}