import { videoInfo } from "../videoInfo";

const VideoGallery = (props) =>
{    
    const renderImages = () =>
    {     
        

        return (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 ">              
                {videoInfo.map((vdo, index) => (
                    <div key={index} >
                        <video controls src={require('../assets/videos/' + vdo.videoName)} className="border-2 border-gray-400 rounded-t-md">                           
                        </video>
                        <div className="bg-slate-300 rounded-b-md p-2 min-h-24">
                            <div className="text-lg font-bold">{vdo.title}</div>
                            <div className="text-base">{vdo.description}</div>
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