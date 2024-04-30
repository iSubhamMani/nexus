import React from "react";
import AvatarSection from "./AvatarSection";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import ThemeToggler from "./ThemeToggler";

const words = "My social life compiles better on weekends";

function IntroSection() {
  return (
    <div>
      <AvatarSection />
      <ThemeToggler />
      <div className="text-center px-6">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}

export default IntroSection;
