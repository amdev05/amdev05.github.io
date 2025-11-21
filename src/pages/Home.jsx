import { TECHNOLOGIES, UTILITIES } from "../constants/index.jsx";

import Navbar from "@/components/ui/Navbar";
import MusicPlayer from "../components/ui/MusicPlayer";
import Contacts from "../components/sections/Contacts";

// OLD
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Profile from "@/components/sections/Profile";
import Activity from "@/components/sections/Activity";
import Footer from "@/components/sections/Footer";
import Tech from "../components/sections/Tech";
// import MusicPlayer from "@/components/sections/MusicPlayer";

function Home() {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300">
      {/* BACKGROUND */}
      <div className="fixed top-0 -z-10 w-full h-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* NAVBAR */}
      <Navbar />

      <div className="">
        <Hero />
      </div>

      {/* PAGES */}
      <section id="home" className="h-screen w-full"></section>

      <section id="projects" className="px-mobile py-32">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-16">PROJECTS</h1>
        <Projects />
      </section>

      <section id="profile" className="px-mobile py-32">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-16">PROFILE</h1>
        <Profile />

        <h2 className="text-3xl lg:text-4xl font-bold text-center mt-24 mb-12">TECHNOLOGIES</h2>
        <Tech props={TECHNOLOGIES} />
        <h2 className="text-3xl lg:text-4xl font-bold text-center mt-24 mb-12">UTILITIES</h2>
        <Tech props={UTILITIES} />
      </section>

      <section className="px-mobile py-32 lg:py-48" id="activity">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-16">ACTIVITY</h1>
        <Activity />
      </section>

      <section id="contacts" className="px-mobile py-32">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-16">GET in TOUCH</h1>
        <Contacts />
      </section>

      <Footer />

      {/* MUSIC PLAYER */}
      <div className="fixed bottom-4 h-16 right-6 z-10 lg:right-8 lg:bottom-6">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default Home;
