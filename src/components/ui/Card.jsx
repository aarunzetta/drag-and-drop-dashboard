export default function Card({ children, className = "", hover = false }) {
  return (
    <div
      className={`
        bg-white rounded-xl p-6 border border-gray-200
        ${hover ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300" : "shadow-md"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
