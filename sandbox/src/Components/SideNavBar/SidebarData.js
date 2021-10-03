import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        classname: "nav-text",
        icon: <AiIcons.AiFillHome/>

    },
    {
        title: "Reports",
        path: "/reports",
        classname: "nav-text",
        icon: <IoIcons.IoIosPaper/>

    },
    {
        title: "Products",
        path: "/products",
        classname: "nav-text",
        icon: <FaIcons.FaCartPlus/>

    },
    {
        title: "Team",
        path: "/teams",
        classname: "nav-text",
        icon: <FaIcons.FaTeamspeak/>

    },
    {
        title: "Contacts",
        path: "/contacts",
        classname: "nav-text",
        icon: <AiIcons.AiFillContacts/>

    }

];
