// import { FaPeopleGroup, FaLaptopCode, FaHandshake } from "react-icons/fa6";
// import { TbWorld } from "react-icons/tb";
// import { MdEmail } from "react-icons/md";

import { GoGift } from "react-icons/go";
import { MdOutlineSms } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
type IconType = typeof RiTeamLine | typeof GoGift | typeof MdOutlineSms | typeof AiOutlineTeam;

export interface Experience {
    icon: IconType;
    exp:string,
    description: string
}

export const HomeExperienceData: Experience[] = [
    {
        icon: RiTeamLine,
        exp:'14+',
        description: "Years Of Experience",
    },
    {
        icon: GoGift,
        exp:'1K+',
        description: "Satisfied Clients in the Govt. and Corporate sectors",
    },
    {
        icon: MdOutlineSms,
        exp:'8.2B+',
        description: "Transactional & OTP SMS sent per year",
    },
    {
        icon: AiOutlineTeam,
        exp:'200K+',
        description: "Potential leads Generated via Digital Platforms in last financial year",
    }
];

