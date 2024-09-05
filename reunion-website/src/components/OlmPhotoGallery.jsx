import React, { useState } from "react";

const OlmPhotoGallery = (props) =>
{

  const [currentPage, setCurrentPage] = useState(1);

    const pageSize= 16;
    
  var totalPages = Math.ceil(props.photos.length / pageSize);

  const length = props.photos.length;
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    const handleTouchMove = (moveEvent) => {
      const touchEndX = moveEvent.touches[0].clientX;
      const deltaX = touchStartX - touchEndX;
      if (deltaX > 50) { // Swipe threshold
        nextImage();
      } else if (deltaX < -50) { // Swipe threshold
        prevImage();
      }
      document.removeEventListener('touchmove', handleTouchMove);
    };
    document.addEventListener('touchmove', handleTouchMove);
  };

  const openModal = (index) => {
    setCurrentImageIndex(index + ((currentPage - 1) * pageSize));
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
        var startIndex = (currentPage - 1) * pageSize;
        
        var pageList = props.photos.filter((pr, index) => index >= startIndex && index < startIndex + pageSize);        
        return (
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-3">              
                {pageList.map((image, index) => (
                    <div key={index} onTouchStart={handleTouchStart}>
                        <img src={image} alt={`Image ${index}`} className="min-w-50 h-50 rounded-md cursor-pointer" onClick={() => openModal(index)}  />
                    </div>
                  ))}
            </div>
           
          );        
    }

    const setPage = (buttonType) =>
    {
        if(buttonType === "First")
        {
            setCurrentPage(1);
        }
        else if(buttonType === "Last")
        {
            setCurrentPage(totalPages);
        }
        else if(buttonType === "Previous")
        {
            if(currentPage > 1)
            {
               setCurrentPage((page) => page - 1);
            }
        }
        else if(buttonType === "Next")
        {
            if(currentPage < totalPages)
            {
                setCurrentPage((page) => page + 1);
            }
           
        }
    }

    return (
            
       <div className="my-10 p-3"> 
          <p className="text-xl font-medium">Welcome to Ganesh Chaturdi Photo Gallery. This page will be updated with the photos throughout the event.</p>
       </div>
    );
};

export default OlmPhotoGallery;