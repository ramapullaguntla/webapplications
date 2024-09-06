import React, { useState, useEffect } from 'react';
import tb1 from '../assets/olmphotos/GaneshIdolMaking/GaneshChaturdi2024.jpg';

const folders = [
  { name: 'GaneshIdolMaking'},
  { name: 'KidsPerformance', },
];

const OlmPhotoGallery = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [photos, setPhotos] = useState([]);

  // Load images from the selected folder
  useEffect(() => {

    const importAll = (r) => {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }
    

    if (selectedFolder) {
      
      console.log("selected folder ", selectedFolder);
      const loadImages = async () => {
      
        const images = importAll(require.context(`../assets/olmphotos/GaneshIdolMaking`, false, /\.(png|jpe?g|svg)$/));  
        
        console.log("selected images ", images);

        const arrayImages = [];
        Object.keys(images).map((image, index) =>  arrayImages.push(images[image]));  
        setPhotos(arrayImages);        
      };
      loadImages();
    }
  }, [selectedFolder]);

  return (
    <div className="container mx-auto p-4">
      {/* Display Folders */}
      {!selectedFolder && (
        <div className="grid grid-cols-4 gap-2">
          {folders.map((folder, index) => (
            <div
              key={folder.name}
              className="cursor-pointer flex-col items-center border border-red-500"
              onClick={() => setSelectedFolder(folder.name)}
            >
              <img
                src={tb1}
                alt={folder.name}
                className="w-60 h-48 object-cover"
              />
              <p className="text-center mt-2 font-semibold">{folder.name}</p>
            </div>
          ))}
        </div>
      )}

      {/* Display Photos in Selected Folder */}
      {selectedFolder && (
        <div>
          <button
            className="mb-4 p-2 bg-gray-500 text-white rounded"
            onClick={() => setSelectedFolder(null)}
          >
            Back to Folders
          </button>
          <div className="grid grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OlmPhotoGallery;
