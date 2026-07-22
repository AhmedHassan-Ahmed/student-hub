const Button = ({
  variant = "primary",
  children,
  className = "",
  onclick,
  ...props
}) => {
  const variants = {
    primary:
      "bg-blue-700 text-white hover:bg-blue-800 transition-all duration-500",
    outline: "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50",
  };

  return (
    <button
      className={`focus:outline-0 inline-flex w-full items-center justify-center gap-2 px-4 py-2 text-sm font-semibold transition sm:w-auto sm:px-5 sm:py-3 ${variants[variant]} ${className}`}
      {...props}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

export default Button;
