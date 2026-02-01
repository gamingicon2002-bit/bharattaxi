import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsAppButton = () => {
  const message = `
Hello, I want to book a taxi


  `;

  const encodedMessage = encodeURIComponent(message.trim());

  return (
    <a
      href={`https://wa.me/919888476943?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-24
        z-50
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        text-white
        shadow-lg
        hover:scale-110
        transition-transform
        animate-pulse
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsAppButton;
