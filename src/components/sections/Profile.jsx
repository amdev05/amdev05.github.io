import aboutImg from "@/assets/images/ademProfile.webp";
import { ABOUT_TEXT } from "@/constants";

const Profile = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center gap-20 xl:mx-10">
      <div className="xl:w-1/4 md:w-1/3 w-full flex items-center justify-center">
        <div className="aspect-3/4 rounded-2xl max-h-[400px]">
          <img src={aboutImg} alt="" className="w-full h-full object-cover rounded-2xl" loading="lazy" />
        </div>
      </div>
      <div className="xl:w-2/4 md:w-2/3 w-full max-w-xl flex items-center">
        <div className="text-base xl:text-lg">
          <p>Hi Theree!!</p>
          <p className="mb-4">
            I'm <span className="">Ade Muchlisidin</span> and I'm a <span>Frontend Developer</span>
          </p>
          <p className="mb-4 bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
