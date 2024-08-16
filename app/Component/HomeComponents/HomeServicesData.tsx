// import { FaPeopleGroup } from "react-icons/fa6";
// import { FaLaptopCode } from "react-icons/fa";
// import { TbWorld } from "react-icons/tb";
// import { MdEmail } from "react-icons/md";
// import { FaHandshake } from "react-icons/fa6";

// type IconType = typeof FaPeopleGroup | typeof FaLaptopCode | typeof TbWorld | typeof MdEmail | typeof FaHandshake;
// interface service{
//     icon: IconType
//     title:string
//     description:string
//     btn:string
// }
// export const HomeServicesData:service[]={
//     {
//         icon:FaPeopleGroup,
//         title:"hello",
//         description:"it's me"
//     }
// }


import { FaPeopleGroup, FaLaptopCode, FaHandshake } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

type IconType = typeof FaPeopleGroup | typeof FaLaptopCode | typeof TbWorld | typeof MdEmail | typeof FaHandshake;

export interface Service {
    icon: IconType;
    title: string;
    description: string;
    btn: string; // Made btn optional
}

export const HomeServicesData: Service[] = [
    {
        icon: FaPeopleGroup,
        title: "E-Commerce",
        description: "E-commerce is a rapidly growing industry, with global e-commerce sales expected to reach $6.5 trilli...",
        btn: "+ E-COMMERCE "
    },
    {
        icon: FaLaptopCode,
        title: "Mobile App Development",
        description: "Mobile app development is the process of creating software applications that run on mobile devices, ....",
        btn: "+ MOBILE APP "
    },
    {
        icon: FaLaptopCode,
        title: " Web Development",
        description: "Web development involves using various programming languages and frameworks, such as HTML, CSS, Java...",
        btn: "+ WEB "
    },
    {
        icon: TbWorld,
        title: "SEO",
        description: "At Newrise Technosys, we understand the importance of having a strong online presence, and Search En...",
        btn: "+ SEO"
    },
    {
        icon: MdEmail,
        title: "SMS",
        description: "SMS can be used to promote products or services by sending targeted messages to customers and prospe...",
        btn: "+ SMS "
    },
    {
        icon: FaHandshake,
        title: "SMM",
        description: "Social Media Marketing, which is the process of using social media platforms to promote a product, s...",
        btn: "+ SMM"
    }
];

