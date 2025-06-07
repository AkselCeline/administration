const Section = ({ title, children, color = "text-gray-900" }) => (
    <div className="break-inside-avoid">
        <h2 className={`text-lg sm:text-xl font-semibold mb-2 ${color}`}>{title}</h2>
        {children}
    </div>
);

export default Section;