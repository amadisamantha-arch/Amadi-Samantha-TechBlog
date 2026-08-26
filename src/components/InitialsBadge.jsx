const InitialsBadge = ({ name, color = "#7C3AED" }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="w-full aspect-video flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <span className="text-4xl font-display font-bold text-white">
        {initials}
      </span>
    </div>
  );
};

export default InitialsBadge;