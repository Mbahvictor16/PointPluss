import { BsCardChecklist } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { RiEBike2Line, RiInformationLine } from "react-icons/ri";
import { TiGroup, TiShoppingCart } from "react-icons/ti";

let Items = [
    {
        name: "Home",
        href: "/",
        icon: <IoHome />
    },
    {
        name: "Categories",
        href: "/faq",
        icon: <FaListUl />
    },
    {
        name: "Order History",
        href: "/person",
        icon: <LiaClipboardListSolid />
    },
    {
        name: "Cart",
        href: "/orders",
        icon: <TiShoppingCart />
    },
    {
        name: "Reviews",
        href: "/",
        icon: <BsCardChecklist />
    },
    {
        name: "Vendors",
        href: "/aboutus",
        icon: <TiGroup />
    },
    {
        name: "Riders",
        href: "/aboutus",
        icon: <RiEBike2Line />
    },
    {
        name: "About Us",
        href: "/aboutus",
        icon: <RiInformationLine />
    },
]

export default Items;