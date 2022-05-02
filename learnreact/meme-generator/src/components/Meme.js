import React from 'react';
import "../styles/header.css"
import memesdata from '../data/memesdata';
import { react } from '@babel/types';

export default function Meme()
{

    const [currentMeme, setCurrentMeme] = React.useState({
        topText: "",
        bottomText: "",
        memeImage:"https://i.imgflip.com/30b1gx.jpg"
    });
    

    const [allMemes, setAllMemes] = React.useState({});

    React.useEffect(() =>
    {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(all => setAllMemes(all.data.memes));

    }, []);

    //make an API call to "https://api.imgflip.com/get_memes"
    function getRandomMeme()
    {
        var randomNum = Math.floor(Math.random() * 100);
        var randomUrl = allMemes[randomNum].url;
        console.log("clicked " + randomUrl);
        setCurrentMeme({
            memeImage: randomUrl
        });
    }

    function  handleSubmit(event)
    {
        event.preventDefault();
        console.log("form submitted");
        console.log(currentMeme);

        // var randomNum = Math.floor(Math.random() * 100);
        // var randomUrl = allMemes[randomNum].url;
        // console.log("clicked " + randomUrl);
        // setCurrentMeme({
        //     memeImage: randomUrl
        // });
    }

    function handleChange(event)
    {
        setCurrentMeme(prevFormData =>
            {
                return {
                    ...prevFormData,
                    [event.target.name]: event.target.value
                };
            });
    }

    return (
        <div className="memes">

            <form onSubmit={handleSubmit}>
           
            <input type="text" placeholder="Top Text" id="topText" name="topText" value={currentMeme.topText} onChange={handleChange}></input>
            <input type="text" placeholder="Bottom Text" id="bottomText" name="bottomText" value={currentMeme.bottomText} onChange={handleChange}></input>

            <button>Get a new Meme</button>
            </form>
            <img src={currentMeme.memeImage} height="300px" width="350px"/>
            <p>{currentMeme.topText}</p>
            <p>{currentMeme.bottomText}</p>
        </div>
    );
}