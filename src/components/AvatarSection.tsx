import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Subham Mani",
    designation: "Turning chai into code",
    image:
      "https://i.pinimg.com/736x/91/77/97/91779771e0c323b769b5468319754d3a.jpg",
  },
];

function AvatarSection() {
  return (
    <div className="mt-28 sm:mt-32 mb-12 flex flex-row justify-center items-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export default AvatarSection;
