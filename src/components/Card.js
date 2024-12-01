const Card = ({ park, onClick }) => {
    return (
        <div className="bg-indigo-100 shadow-md rounded-lg p-2 m-2 w-60 cursor-pointer transform transition-transform hover:scale-105" onClick={() => onClick(park)}>
            <div className="justify-items-center bg-indigo-100">
                <img alt={park.images[0].altText} src={park.images[0].url} className="object-cover w-45 h-40" />
            </div>
            <div className="bg-indigo-100 sm:p-2">
                <p className="block text-xs text-gray-500">{park.addresses[0].city}, {park.addresses[0].stateCode}</p>
                <h3 className="mt-0.5 text-lg text-gray-700">{park.fullName}</h3>
            </div>
        </div>
    )
};

export default Card;