import React from "react";
import { useState } from "react";
const Carousel = (props) =>{
    
    
    return (
        <div id="carouselAll">
        


        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="distance-top"> </div>
      <h1 className="statTitle" >{props.SongName}</h1>
      <div className="distance-mid"></div>
      <h3 className="statTitle">By {props.Artists} </h3>


      
      <div className="distance-tiny"> </div>
      <h4 className="statTitle"> Popularity: {props.popularity}/100</h4>
      <div className="distance1"></div>
      <div className="carousel-caption d-none d-md-block">
    
      </div>
    </div>
    <div className="carousel-item">
    <div className="distance-top"> </div>
      <h1 className="statTitle">Danceability: {props.dance}  </h1>
      <div className="distance-bottom"> </div>
      <div className="carousel-caption d-none d-md-block">
        
        <p className="caption">Danceability is how suitable a song is for dancing to. How can we
          measure this? It's actually based on a combination of musical elements, ranging from tempo,
           rhythm stability, beat strength, and overall regularity.</p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="distance-top"> </div>
      <h1 className="statTitle">Energy: {props.energy}</h1>
      <div className="distance-bottom"> </div>
      <div className="carousel-caption d-none d-md-block">
        
        <p className="caption">The energy of a song can be influenced by loudness and instrumentation, 
          but energy can also change when the lyrics reflect more emotion rather than 
          observation, through different chords, and can rise with a song's melody. 
        </p>
      </div>
    </div>


    <div className="carousel-item">
    <div className="distance-top"> </div>
      <h1 className="statTitle">Speechiness {props.speech}</h1>
      <div className="distance-bottom"> </div>
      <div className="carousel-caption d-none d-md-block">
        
        <p className="caption">The speechines of a song is the presence of spoken word in a track. less than 0.033 is instrumental,
          0.033-0.066 is a mix, and 0.067 and above is primarily spoken word.
        </p>
      </div>
    </div>


    <div className="carousel-item">
    <div className="distance-top"> </div>
      <h1 className="statTitle">Valence {props.valence}</h1>
      <div className="distance-bottom"> </div>
      <div className="carousel-caption d-none d-md-block">
        
        <p className="caption"> Valence describes the musical positiveness conveyed by a track.
           Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric),
            while tracks with low valence sound more negative (e.g. sad, depressed, angry)
        </p>
      </div>
    </div>






  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


</div>

    )

}




export default Carousel;