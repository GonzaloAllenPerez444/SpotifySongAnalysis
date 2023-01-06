import React from "react";
import { useState } from "react";
const Carousel = (props) =>{
    console.log("props.artists is now "+ props.Artists + " and it's type is " + typeof(props.Artists));
    //let [sep, setSep]  = useState((props.Artists != "Nothing yet")? "YEPEPEPE": "artists not loaded");
    
    /*
    if (props.Artists != "Nothing yet")
    { 
     
      let joined = props.Artists.join();
      setSep(joined); }
        */
    function formatArtists (input)
    {
      let joined = input.join(",")
      console.log("joined is " + joined);
      return joined
    }
    return (
        <div id="carouselAll">
        


        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="distance-top"> </div>
      <h1 className="statTitle" >{props.SongName}</h1>
      <div className="distance-mid"></div>
      <h3 className="statTitle">By {props.Artists} </h3>


      
      <div className="distance-split"> </div>
      <h4 className="statTitle"> Popularity: {props.popularity}/100</h4>
      <div className="distance-split"></div>
      <div className="carousel-caption d-none d-md-block">
    
      </div>
    </div>
    <div className="carousel-item">
    <div className="distance-top"> </div>
      <h1 className="statTitle">Danceability: {props.dance}  </h1>
      <div className="distance-bottom"> </div>
      <div className="carousel-caption d-none d-md-block">
        
        <p>Danceability is how suitable a song is for dancing to. How can we
          measure this? It's actually based on a combination of musical elements, ranging from tempo,
           rhythm stability, beat strength, and overall regularity.</p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="distance-top"> </div>
      <h1 className="statTitle">Energy: {props.energy}</h1>
      <div className="distance-bottom"> </div>
      <div className="carousel-caption d-none d-md-block">
        
        <p>The energy of a song can be influenced by loudness and instrumentation, 
          but energy can also change when the lyrics reflect more emotion rather than 
          observation, through different chords, and can rise with a song's melody. 
        </p>
      </div>
    </div>


    <div className="carousel-item">
    <div className="distance-top"> </div>
      <h1 className="statTitle">Energy2- make this an actual valid slide: {props.energy}</h1>
      <div className="distance-bottom"> </div>
      <div className="carousel-caption d-none d-md-block">
        
        <p>The energy of a song can be influenced by loudness and instrumentation, 
          but energy can also change when the lyrics reflect more emotion rather than 
          observation, through different chords, and can rise with a song's melody. 
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