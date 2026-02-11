export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center";
  const variants = {
    primary:
      "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-500/30",
    secondary:
      "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200",
    ghost: "hover:bg-gray-100 text-gray-700",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
