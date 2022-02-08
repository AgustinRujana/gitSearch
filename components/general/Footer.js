import { iconGithub, iconGoogle, iconLinkedIn } from "../icons";

const social = [
  { href: "https://www.linkedin.com/in/agustinrujana/", icon: iconLinkedIn },
  { href: "https://github.com/AgustinRujana", icon: iconGithub },
  { href: "mailto:agustinrujanacontact@gmail.com", icon: iconGoogle },
];

const Footer = () => {
  return (
    <div className="w-full bg-white py-16 text-gray-900 sm:flex text-center items-center justify-center gap-4">
      <p className="tracking-wide font-light text-xl mb-2 sm:mb-0">Agustin Rujana</p>
      <ul className="flex items-center justify-center gap-2">
        {social.map((item) => (
          <li key={item.href}>
            <a href={item.href} target='_blank' rel="noopener noreferrer">
              <item.icon className="h-6 hover:text-purple-700 hover:rotate-[360deg] hover:scale-125 transform transition-all ease-in-out duration-1000" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
