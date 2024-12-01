import { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 max-w-2xl">
            <button
                className="w-full text-left py-4 px-6 text-lg font-medium text-gray-700 hover:bg-gray-100 focus:outline-none flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <span>{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen &&
                <div className="px-6 pb-4 max-w-3xl text-gray-600">
                    <ul className="list-disc mx-8">
                        {content.map((item, index) => (
                            <li className="font-bold" key={index}>{item.subtitle}
                                <p className="font-light">{item.description}</p>
                            </li>

                        ))}
                    </ul>
                </div>}
        </div>
    )
}

export default Accordion;