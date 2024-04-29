interface SocialButtonProps {
  content: string;
  link?: string;
  onClickHandler?: () => void;
  Icon: React.ComponentType<{ size: number }>; // Define the type for the Icon prop
}

function SocialButton({
  content,
  link,
  Icon,
  onClickHandler,
}: SocialButtonProps) {
  return (
    <button
      onClick={onClickHandler}
      className="font-medium hover:bg-black hover:text-white hover:border-white dark:hover:bg-white dark:hover:text-black dark:hover:border-black border-2 border-black dark:border-white uppercase bg-white dark:bg-black text-black dark:text-white transition duration-200 text-[1rem] shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-2 flex items-center gap-2"
      >
        <Icon size={18} /> {content}
      </a>
    </button>
  );
}

export default SocialButton;
