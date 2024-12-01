import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion"

const Home = ({ accordionData, carouselData }) => {
    return (
        <div className="flex flex-row flex-wrap justify-evenly p-8">
            <div className="lg:w-1/2">
                {accordionData.map((item, index) => (
                    <Accordion
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
            <Carousel carouselData={carouselData} />
        </div>
    )
};

export default Home;