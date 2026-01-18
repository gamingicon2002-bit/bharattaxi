import { PhoneCall } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+9888476943"
      className="
        fixed 
        bottom-6 
        right-6 
        z-50
        flex 
        items-center 
        justify-center
        w-14 
        h-14
        rounded-full
        bg-primary
        text-primary-foreground
        shadow-lg
        hover:scale-110
        transition-transform
        animate-pulse
      "
      aria-label="Call Us"
    >
      <PhoneCall className="w-6 h-6" />
    </a>
  );
};

export default FloatingCallButton;
