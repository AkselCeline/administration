export function Card({ children }) {
    return (
        <div className="border rounded-xl shadow-lg p-6 bg-white/30 backdrop-blur-lg transition duration-300 hover:shadow-xl">
            {children}
        </div>
    );
}

export function CardContent({ children, className }) {
    return <div className={"p-6 text-gray-800 " + className}>{children}</div>;
}
