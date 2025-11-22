import { IoPlay } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";
import { MUSIC } from "../../constants";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer({ className }) {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [open, setOpen] = useState(true);

  const togglePlay = () => {
    if (play) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay((play) => !play);
  };

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      setOpen(false);
    }, 8000);

    console.log("haloo");
    return () => clearTimeout(timer);
  }, [open, play]);

  return (
    <div className={` blury rounded-full p-2 flex items-center gap-4 overflow-hidden transition-all duration-700 ${className} ${open ? "max-w-96" : "max-w-16"}`}>
      <audio ref={audioRef} src={MUSIC.music} loop></audio>

      <img
        src={MUSIC.image}
        className={`size-12 aspect-square object-cover rounded-full  cursor-pointer animate-spin [animation-duration:8s] ${play ? "" : "pause-spin"}`}
        alt="image"
        onClick={() => setOpen((open) => !open)}
      />
      <div className={`flex-1 text-nowrap transition duration-500 ${open ? "" : "opacity-0"}`}>
        <p className=" font-semibold">{MUSIC.title}</p>
        <p className="text-sm text-neutral-400">{MUSIC.artist}</p>
      </div>
      <div className={`text-2xl mx-3 aspect-square cursor-pointer transition duration-500 ${open ? "" : "opacity-0"}`} onClick={togglePlay}>
        {play ? <FaPause /> : <IoPlay />}
      </div>
    </div>
  );
}
