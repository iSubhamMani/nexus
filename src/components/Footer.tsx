import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="z-50 my-4">
      <div className="flex gap-2 items-center text-sm justify-center text-black dark:text-white">
        Crafted with <FaHeart size={18} color="red" /> by{" "}
        <p className="font-bold">Subham Mani</p>
      </div>
    </div>
  );
}

export default Footer;
