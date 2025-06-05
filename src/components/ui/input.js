export function Input(props) {
    return (
        <input
            {...props}
            className={
                "border border-gray-300 focus:border-blue-500 focus:ring-blue-500 px-4 py-2 rounded-lg w-full shadow-sm " +
                props.className
            }
        />
    );
}