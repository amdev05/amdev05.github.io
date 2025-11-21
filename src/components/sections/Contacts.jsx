import { DataContacts } from "../../constants/index.jsx";
import { FaArrowRight } from "react-icons/fa6";

export default function Contacts() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto gap-4">
      {DataContacts.map((data) => (
        <a href={data.link} className="group flex items-center gap-4 blury rounded-full pl-6 pr-2 py-2" key={data.platform} target="__blank">
          <span className="text-2xl">{data.icon}</span>
          <p className="flex-1 text-center ">{data.platform}</p>
          <div className="rounded-full p-4 blury opacity-0 -translate-x-2 group-hover:opacity-100 group-active:opacity-100 group-hover:translate-x-0 group-active:translate-x-0 transition">
            <FaArrowRight className="text-xl text-accent" />
          </div>
        </a>
      ))}
    </div>
  );
}
