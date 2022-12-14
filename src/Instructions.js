import React from "react";


const Instructions = () =>
{

return (
 
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="AccordionHeadingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How It Works
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p> For this project, I used Webpack to bundle files in conjunction with React and Bootstrap for the frontend,
          and used ExpressJS and the Spotipy Python library to interact with the Spotify Web API for the backend. Some of these
           statistics include a song's  speechiness, it's danceability, and even the song's overall popularity compared to all songs on Spotify. 
           With this data, you could get a better overall view of what a person truly enjoys in music and point them to music that
           would fit their taste-an extension I'm considering building in the future. 
        </p>
        
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="AccordionHeadingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" id="col">
        <p id="directions">In order to use, simply paste the song's URI from your Spotify Application into the
          form below. A song's URI can be found by right clicking the song name, hovering over "share" ,
           then holding the [alt] key, which should show
          "Copy Spotify URI". Then just hit analyze to send!
        </p> <p></p>
        <div className="graphics">
        <img src="../graphic2.png" id="graphic2" />
        <img src="../graphic3.png" id="graphic3" />
        <img src="../graphic4.png" id="graphic4" />
        
        </div> 
    </div>
    </div> 
    </div>
</div>


)


}



export default Instructions;







