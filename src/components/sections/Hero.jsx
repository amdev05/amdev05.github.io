import { useEffect, useState } from "react";

export default function Hero() {
  const [blured, setBlured] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBlured(true);
        setDark(true);
      } else {
        setBlured(false);
        setDark(false);
      }
    });
  });

  let bluredActive = blured ? "bg-black/10 backdrop-blur-md" : "bg-transparent";
  let darkActive = dark ? "text-neutral-500" : "text-neutral-300";

  return (
    <div className="flex justify-center items-center flex-col h-screen fixed w-full -z-10">
      <p className="">ADE MUCHLISIDIN</p>
      <h1 className={`md:text-8xl text-6xl tracking-widest mt-6 font-bold font-league-spartan ${darkActive}`}>AMDEV</h1>
      <p className="md:text-4xl text-3xl md:tracking-widest tracking-normal mt-4 font-semibold bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-center">
        FRONTEND DEVELOPER
      </p>
      <div className={`absolute  w-full h-full transition duration-500 ${bluredActive}`}></div>
    </div>
  );
}
