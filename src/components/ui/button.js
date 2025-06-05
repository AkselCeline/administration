export function Button({ children, variant = "primary", ...props }) {
    const base = "px-5 py-2 rounded-md text-sm font-medium transition-all duration-200";

    const variants = {
        primary: "bg-green-600 text-white hover:bg-green-700 shadow-sm",
        secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100",
    };

    return (
        <button {...props} className={`${base} ${variants[variant]}`}>
            {children}
        </button>
    );
}
