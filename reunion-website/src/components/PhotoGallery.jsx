import React, { useState } from "react";
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PHOTOS_PER_PAGE = 16;
const PhotoGallery = (props) =>
{
  const [currentPage, setCurrentPage] = useState(1);
  
  var totalPages = Math.ceil(props.photos.length / PHOTOS_PER_PAGE);  
  const start = (currentPage - 1) * PHOTOS_PER_PAGE;
  const currentPhotos = props.photos.slice(start, start + PHOTOS_PER_PAGE);

  
  

    return (
            
      <div className="p-6">
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {currentPhotos.map((photo, i) => (
            <div key={start + i} className="text-center">
              <PhotoView src={photo}>
                <img
                  src={photo}
                  alt="Photos"
                  className="rounded-xl cursor-pointer shadow hover:scale-105 transition-transform"
                />
              </PhotoView>              
            </div>
          ))}
        </div>
      </PhotoProvider>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 items-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="bg-cyan-500 py-2 px-2 rounded-lg"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="bg-cyan-500 py-2 px-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
    );
};

export default PhotoGallery;