import { SiWhatsapp } from 'react-icons/si';

export default function FloatingElements() {
  return (
    <>
      <a
        href="https://wa.me/918004117317"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform cursor-pointer group"
      >
        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-75" />
        <SiWhatsapp size={28} className="relative z-10" />
      </a>
    </>
  );
}
