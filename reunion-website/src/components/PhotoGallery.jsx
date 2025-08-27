import React, { useState } from "react";
import {PhotoProvider, PhotoView} from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FcFolder} from 'react-icons/fc';

const PhotoGallery = (props) =>
{
  
  const [selectedFolder, setSelectedFolder] = useState(null);

   const groups = ["Clay Ganesha Event", "Ganesh Chaturdi Festival", "Sporting Events"];
   const sportingEventGroups = ["Table Tennis", "Cricket", "Pickleball", "Badminton"];

    const getName = (str) =>
    {
      const match = str.match(/\/([^\/]+?)\.[a-f0-9]{10,}\.(jpg|jpeg|png|webp)$/i);
      const name = match ? match[1] : null;
      return name;
    }

    const setBackFolder = (currentFolder) =>
    {
        if(currentFolder === "Table Tennis" || currentFolder === "Cricket" || currentFolder === "Pickleball" || currentFolder === "Badminton")
        {
          setSelectedFolder("Sporting Events");
        }
        else
        {
          setSelectedFolder(null);
        }
    }

    if (!selectedFolder) {      
      return (
        <div className="p-6">          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {groups.map((group, i) => (
              <button
                key={i}
                onClick={() => setSelectedFolder(group)}
                className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition"
              >
                <FcFolder size={48} className="text-blue-500 mb-2" />
                <span className="capitalize">{group}</span>               
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Show photos from selected folder
  return (
    
    <div className="p-6">
      <button className="bg-header-brown py-1 px-2 rounded-lg text-gray-50 hover:bg-green-800" onClick={() => setBackFolder(selectedFolder)}>
        Back
      </button>

      <h2 className="text-xl font-bold mb-4 capitalize text-center">{selectedFolder}</h2>

      {selectedFolder === "Clay Ganesha Event" ?
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          { props.clayganeshaPhotos.map((src, idx) => (
             
            <div key={idx} className="text-center">
              <PhotoView src={src}>
                <img
                  src={src}
                  alt={`Photo ${idx + 1}`}
                  className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform"
                />
              </PhotoView>
              <div className="text-sm text-gray-600 mt-2">{getName(src)}</div>
            </div>
          ))
          
          }
        </div>
      </PhotoProvider>      
      : selectedFolder === "Ganesh Chaturdi Festival" ?
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          { props.photos.map((src, idx) => (
            <div key={idx} className="text-center">
            <PhotoView src={src}>
              <img
                src={src}
                alt={`Photo ${idx + 1}`}
                className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform"
              />
            </PhotoView>
            <div className="text-sm text-gray-600 mt-2">{getName(src)}</div>
          </div>
          ))
          
          }
        </div>
      </PhotoProvider>
      : selectedFolder === "Sporting Events" ?
      <div className="p-6">          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {sportingEventGroups.map((group, i) => (
              <button
                key={i}
                onClick={() => setSelectedFolder(group)}
                className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition"
              >
                <FcFolder size={48} className="text-blue-500 mb-2" />
                <span className="capitalize">{group}</span>               
              </button>
            ))}
          </div>
        </div>
      : selectedFolder === "Table Tennis" ?
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          { props.ttPhotos.map((src, idx) => (
            <div key={idx} className="text-center">
            <PhotoView src={src}>
              <img
                src={src}
                alt={`Photo ${idx + 1}`}
                className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform"
              />
            </PhotoView>
            <div className="text-sm text-gray-600 mt-2">{getName(src)}</div>
          </div>
          ))
          
          }
        </div>
      </PhotoProvider>
      : selectedFolder === "Cricket" ?
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          { props.cricketPhotos.map((src, idx) => (
            <div key={idx} className="text-center">
            <PhotoView src={src}>
              <img
                src={src}
                alt={`Photo ${idx + 1}`}
                className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform"
              />
            </PhotoView>
            <div className="text-sm text-gray-600 mt-2">{getName(src)}</div>
          </div>
          ))
          
          }
        </div>
      </PhotoProvider>
      : selectedFolder === "Pickleball" ?
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          { props.pickleballPhotos.map((src, idx) => (
            <div key={idx} className="text-center">
            <PhotoView src={src}>
              <img
                src={src}
                alt={`Photo ${idx + 1}`}
                className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform"
              />
            </PhotoView>
            <div className="text-sm text-gray-600 mt-2">{getName(src)}</div>
          </div>
          ))
          
          }
        </div>
      </PhotoProvider>
      : selectedFolder === "Badminton" ?
      <PhotoProvider>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          { props.badmintonPhotos.map((src, idx) => (
            <div key={idx} className="text-center">
            <PhotoView src={src}>
              <img
                src={src}
                alt={`Photo ${idx + 1}`}
                className="rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform"
              />
            </PhotoView>
            <div className="text-sm text-gray-600 mt-2">{getName(src)}</div>
          </div>
          ))
          
          }
        </div>
      </PhotoProvider>
      :<></>
}
    </div>
  );
};

export default PhotoGallery;