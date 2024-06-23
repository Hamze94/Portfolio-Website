import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
const socials = [
    {
        icon: <FaGithub />, path: 'https://github.com/Hamze94'
    },
    {
        icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/hamze-mohamed-36aa752ab/'
    },
    {
        icon: <FaTwitter />, path: 'https://x.com/HamzeMoham70376'
    }
]

interface SocialsProps {
    containerStyles: any;
    iconStyles: any;
}
const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((item, index) => {
                    return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>

                })
            }
        </div>
    )
}
export default Socials;
