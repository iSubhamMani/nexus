import React from "react";
import AvatarSection from "./AvatarSection";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = "My social life compiles better on weekends";

function IntroSection() {
  return (
    <div>
      <AvatarSection />
      <div className="text-center px-6">
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}

export default IntroSection;
