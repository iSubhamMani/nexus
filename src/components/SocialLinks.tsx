"use client";
import SocialButton from "./SocialButton";
import { ImLinkedin } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";
import { SiHashnode } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";

function SocialLinks() {
  const copyDiscordID = () => {
    navigator.clipboard.writeText("iSubhamMani#7202");
  };

  return (
    <div className="z-50 flex flex-col items-center mt-10">
      <p className="dark:text-white text-black font-bold text-[1rem] sm:text-lg">
        Fork Me
      </p>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <SocialButton
          content="LinkedIn"
          link="https://www.linkedin.com/in/subham-mani-048731288/"
          Icon={ImLinkedin}
        />
        <SocialButton
          content="Twitter"
          link="https://twitter.com/manisubham09"
          Icon={BsTwitterX}
        />
        <SocialButton
          content="Github"
          link="https://github.com/iSubhamMani"
          Icon={ImGithub}
        />
        <SocialButton
          content="Hashnode"
          link="https://subham-mani.hashnode.dev/"
          Icon={SiHashnode}
        />
        <SocialButton
          content="Discord"
          onClickHandler={copyDiscordID}
          Icon={BsDiscord}
        />
        <SocialButton
          content="Instagram"
          link="https://www.instagram.com/subhamxmani/"
          Icon={LuInstagram}
        />
      </div>
    </div>
  );
}

export default SocialLinks;
