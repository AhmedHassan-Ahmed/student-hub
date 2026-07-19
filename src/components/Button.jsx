const Button = ({
  variant = "primary",
  children,
  className = "",
  onclick = false,
  ...props
}) => {
  const variants = {
    primary: "bg-blue-700 text-white hover:bg-blue-800",
    outline: "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
      onclick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
