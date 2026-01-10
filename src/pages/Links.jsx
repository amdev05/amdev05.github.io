import { DATALINKS } from "../constants/index.jsx";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../components/sections/Footer.jsx";
function Links() {
  return (
    <>
      {/* BACKGROUND */}
      <div className="fixed top-0 -z-10 w-full h-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="max-w-lg min-h-dvh flex flex-col mx-auto px-5">
        <section className="flex-1 flex flex-col justify-center py-10">
          <h1 className="text-white font-semibold text-center text-xl">Amdev Links</h1>

          <div className="space-y-4 mt-10">
            {DATALINKS.map((data) => (
              <a href={data.link} className="group flex items-center gap-4 blury rounded-full pl-6 pr-2 py-2 text-white" key={data.platform} target="__blank">
                <span className="text-2xl">{data.icon}</span>
                <span className="flex-1 text-center ">{data.platform}</span>
                <div className="rounded-full p-4 blury opacity-0 -translate-x-2 group-hover:opacity-100 group-active:opacity-100 group-hover:translate-x-0 group-active:translate-x-0 transition">
                  <FaArrowRight className="text-xl text-accent" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Links;
