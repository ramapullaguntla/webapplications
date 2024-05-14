const VideoGallery = (props) =>
{
    const renderImages = () =>
    {     

        return (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ">              
                {props.videos.map((vdo, index) => (
                    <div key={index} className="border border-gray-400">
                        <video controls>
                            <source src={vdo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                  ))}
            </div>
           
          );        
    }

    return (
        <div className="my-10 p-3"> 
          {renderImages()}                       
       </div>
    );
}

export default VideoGallery;