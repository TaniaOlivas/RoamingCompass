import Card from "./Card";

const CardContainer = ({ parks, onCardClick }) => (
    <div className="flex flex-wrap justify-center ">
        {parks.map((park) => (
            <Card key={park.id} park={park} onClick={onCardClick} />
        ))}
    </div>
);

export default CardContainer;
