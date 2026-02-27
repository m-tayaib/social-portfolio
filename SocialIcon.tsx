import { IoIosLaptop } from "react-icons/io";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const social_Icons = [
    {
        id: 0,
        link: "https://github.com/m-tayaib",
        title: "GitHub",
        icon: <FiGithub />,
    },
    {
        id: 1,
        link: "https://www.linkedin.com/in/m-tayaib/",
        title: "LinkedIn",
        icon: <FiLinkedin />,
    },
    {
        id: 2,
        // Universal Email Link: Gmail + fallback to default mail client
        link: "mailto:muhamadtayaib@gmail.com",
        title: "Email",
        icon: <FiMail />,
    },
    {
        id: 3,
        link: "https://tayaibportfolio.vercel.app",
        title: "Website",
        icon: <IoIosLaptop />,
    },
];

function SocialIcon() {
    return (
        <div className="flex gap-5 justify-end py-8">
            {social_Icons.map((item) => (
                <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className="text-white/80 text-2xl hover:text-white hover:scale-110 transition-all duration-300"
                    // optional: for email, you can override to open Gmail in web
                    onClick={(e) => {
                        if (item.title === "Email") {
                            // Try Gmail first
                            window.open(
                                "https://mail.google.com/mail/?view=cm&to=muhamadtayaib@gmail.com&su=Hello%20Tayyab",
                                "_blank"
                            );
                            e.preventDefault(); // prevent default mailto fallback if Gmail opens
                        }
                    }}
                >
                    {item.icon}
                </a>
            ))}
        </div>
    );
}

export default SocialIcon;