export function Input({ className, ...props }) {
    return (
        <input
            {...props}
            className={
                "border border-gray-300 focus:border-blue-500 focus:ring-blue-500 px-4 py-3 rounded-lg w-full shadow-sm transition duration-300 hover:shadow-md " +
                className
            }
        />
    );
}