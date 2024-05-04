import React, { useState } from "react";

const PhotoGallery = (props) =>
{
  console.log("photos array ", props.photos);
  const length = props.photos.length;
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + length - 1) % length);
  };
  
    
    const renderImages = () =>
    {              
        return (
            <div className="grid grid-cols-5 gap-1">              
                {props.photos.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Image ${index}`} className="min-w-60 max-h-40 rounded-md cursor-pointer" onClick={() => openModal(index)}  />
                    </div>
                  ))}
            </div>
           
          );        
    }

    return (
            
       <div className="my-10 p-3"> 
          {renderImages()}
          {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <span className="absolute top-5 right-5 text-white text-3xl cursor-pointer" onClick={closeModal}>&times;</span>
          <div className="text-white text-4xl cursor-pointer" onClick={prevImage}>&#10094;</div>
          <img src={props.photos[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="max-w-3xl max-h-3xl" />
          
          <div className="text-white text-4xl cursor-pointer" onClick={nextImage}>&#10095;</div>
        </div>
      )}
       </div>
    );
};

export default PhotoGallery;