const VideoGallery = (props) =>
{
    const renderImages = () =>
    {     
        

        return (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ">              
                {props.videos.map((vdo, index) => (
                    <div key={index} >
                        <video controls src={vdo} className="border-2 border-gray-400 rounded-t-md">                           
                        </video>
                        <div className="bg-slate-200 rounded-b-md font-semibold p-2">
                            Performance by Praneeth, bhavani and shyam
                        </div>
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