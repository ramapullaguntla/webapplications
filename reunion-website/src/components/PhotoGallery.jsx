import React, { useState } from "react";

const PhotoGallery = (props) =>
{

  const [currentPage, setCurrentPage] = useState(1);

    const pageSize= 8;
    
    var totalPages = Math.ceil(props.photos.length / pageSize);

  const length = props.photos.length;
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
                    <div key={index}>
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
          {renderImages()}
          <div className="flex justify-center my-4 p-2 max-w-3xl mx-auto">
                <button className="bg-blue-500 px-4 rounded-md mx-2 text-white" onClick={() => setPage("First")}>First</button>
                <button className="bg-blue-500 px-4 rounded-md mx-2 text-white" onClick={() => setPage("Previous")}>Previous</button>
                <button className="bg-blue-500 px-4 rounded-md mx-2 text-white" onClick={() => setPage("Next")}>Next</button>
                <button className="bg-blue-500 px-4 rounded-md mx-2  text-white" onClick={() => setPage("Last")}>Last</button>
            </div>
          {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 space-x-4">
          <span className="absolute top-5 right-5 text-white text-3xl cursor-pointer" onClick={closeModal}>&times;</span>
          <div className="text-white text-4xl cursor-pointer" onClick={prevImage}>&#10094;</div>
          <img src={props.photos[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="w-80 h-80 md:w-[576px] md:h-[576px] lg:w-[730px] lg:h-[730px]" />          
          <div className="text-white text-4xl cursor-pointer" onClick={nextImage}>&#10095;</div>
        </div>
      )}
       </div>
    );
};

export default PhotoGallery;