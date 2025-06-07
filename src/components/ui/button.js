export function Button({ children, variant = "primary", className, ...props }) {
    const base = "px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition duration-300";

    const variants = {
        primary: "bg-gradient-to-r from-green-500 to-blue-500 text-white hover:shadow-md hover:scale-105",
        secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105",
        ghost: "text-gray-800 hover:bg-gray-200 hover:scale-105",
    };

    return (
        <button {...props} className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
}