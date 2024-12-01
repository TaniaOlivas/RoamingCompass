const Modal = ({ park, onClose }) => {

    return (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center">
            <div className="bg-indigo-100 rounded-lg p-6 m-6 w-100 lg:w-1/3 border-2 border-indigo-200 relative text-center">
                <h2 className=" text-lg sm:text-2xl font-bold mb-4 text-gray-700">{park.fullName}</h2>
                <p className="text-sm sm:text-lg text-gray-700">{park.description}</p>
                <button className="m-3 bg-gray-700 text-gray-100 px-4 py-2 rounded hover:bg-gray-600"><a href={park.url}>Website</a>
                </button>
                <button className="m-3 bg-gray-700 text-gray-100 px-4 py-2 rounded hover:bg-gray-600" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal;