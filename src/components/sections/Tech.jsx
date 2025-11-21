export default function Tech({ props }) {
  return (
    <div className="max-w-global mx-auto flex justify-center gap-6 flex-wrap">
      {props.map((tech) => (
        <div className="blury p-6 text-4xl rounded-4xl" style={{ color: tech.color }} key={tech.name}>
          {tech.icon}
        </div>
      ))}
    </div>
  );
}
