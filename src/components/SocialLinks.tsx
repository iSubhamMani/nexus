"use client";
import SocialButton from "./SocialButton";
import { ImLinkedin } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";
import { SiHashnode } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
import { TiFlowMerge } from "react-icons/ti";
import { useEffect, useState } from "react";

function SocialLinks() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [isCopied]);

  const copyDiscordID = async () => {
    await navigator.clipboard.writeText("iSubhamMani#7202");
    setIsCopied(true);
  };

  return (
    <div className="z-50 flex flex-col items-center mt-10 flex-1">
      <div className="flex gap-2 items-center">
        <TiFlowMerge size={18} color="rgb(22, 163, 74)" />
        <p className="dark:text-green-600 text-green-600 font-bold text-[1rem] sm:text-lg">
          Merge your branch with mine
        </p>
      </div>
      {isCopied && (
        <div className="mt-4">
          <p className="text-sm sm:text-base text-black dark:text-white font-medium">
            Discord ID copied to clipboard!
          </p>
        </div>
      )}
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
