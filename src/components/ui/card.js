export function Card({ children }) {
    return (
        <div className="border rounded-xl shadow-lg p-6 bg-white/80 backdrop-blur-lg">
            {children}
        </div>
    );
}

export function CardContent({ children, className }) {
    return <div className={"p-4 text-gray-800 " + className}>{children}</div>;
}

