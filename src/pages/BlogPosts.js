import React from "react";
import CardContainer from "../components/CardContainer";
import Modal from "../components/Modal"

const BlogPosts = ({ parks, handleCardClick, isModalOpen, selectedPark, closeModal }) => {
    return (
        <div>
            <CardContainer parks={parks} onCardClick={handleCardClick} />
            {isModalOpen && selectedPark && (
                <Modal park={selectedPark} onClose={closeModal} />
            )}
        </div>
    )
};

export default BlogPosts;