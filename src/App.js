import aboutMeImages from "./aboutMeImgs.js";
import famImages from "./familyImgs.js";
import travelImages from "./travelImgs.js";
import skatingImages from "./skatingImgs.js";
import ImageSlider from "./ImageSlider";
import NavBar from "./components/NavBar.jsx";
import background from "./background.svg";

const App = () => {
    return (
      <div className = "background" background-attachment= "local" style={{ backgroundImage: `url(${background})` }}>
      {/* // <div className="background"> */}
      {/* <body>  */}
        <NavBar />
        <div className="banner"></div>
        <a id="about_link"> </a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        
        
        <div className ="sameLine">
          <div className="aboutMeImgs">
            <ImageSlider images={aboutMeImages} />
          </div>
          <p id = "text"> <h1>  Shelly Fradkin</h1>
                Hi there! Welcome to my world! I'm excited to share a glimpse of who I am and what brings me joy. This website is a personal journey,
                a collection of moments that define who I am. 
                <br></br>
                <br></br>
                <br></br>
                As you browse throught the photos, I hope you'll catch a glimpse of the genuine expereinces
                that have shaped me. Thank you for being a part of this journey with me. Feel free to explore! 

                </p>
        </div>


        <a id="friends_link"> </a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className ="sameLine">
          <div className = "aboutMeImgs">
            <ImageSlider images={famImages} />
            </div>
          <p id = "text"> <h1> Friends + Family</h1>
                In this section, I celebrate the incredible people who make my life richer - my friends and family. 
                They are my constant support, bringing laughter, love, and strength to every moment. 
                <br></br>
                <br></br>
                <br></br>
                Through shared adventures and cherished memories, we've created a bond that's unbreakable.
                From spotaneos escapades to heartfelt gatherings, these photos capture the essence of our cherished 
                connections. 
                <br></br>
                <br></br>
                <br></br>
                To my friends and family, thank you for being the heart of my journey.  
                </p>
        </div>


        <a id="travel_link"> </a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className ="sameLine">
          <div className = "aboutMeImgs">
            <ImageSlider images={travelImages} />
            </div>
          <p id = "text"> <h1> Travel</h1>
                Welcome to my travel gallery, where I share glimpses of awe-inspriing landscapes and vibrant cultures. Traveling is my passion, and these photos capture
                the essense of my adventures. 
                <br></br>
                <br></br>
                <br></br>
                From breathtaking vistas to vibrant cityscapes, each destination has left a lasting impression on me. 
                Through travel, I've learned to embrace new experiences and cherish the beauty of our world. 
                <br></br>
                <br></br>
                <br></br>
                May these images ignite your own wanderlust and inspire your next journey. 
                <br></br>
                <br></br>
                <br></br>
                Happy travels! 
                </p>
        </div>


        <a id="skating_link"> </a>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className ="sameLine">
          <div className = "aboutMeImgs">
            <ImageSlider images={skatingImages} />
            </div>
          <p id = "text"> <h1> Skating</h1>
                Step into my world of figure skating! 
                <br></br>
                <br></br>
                <br></br>
                From a young age, I discovered my love for figure skating, and since then, it has been an inseperable part of my life. 
                The allure of gliding effortlesy across the ice, the thrill of mastering new moves, and the joy of expressing myself 
                through elegant routines have captured my heart.
                <br></br>
                <br></br>
                <br></br>
                The early mornings at the rink, the camaraderie with fellow skaters, and the unwavering support from coaches have shaped me
                into the person I am today. Along this path, I've leanred invaluable lessons in determination, resillience, and the beauty of never giving up. 
                <br></br>
                <br></br>
                <br></br>
                These snapshots offer a glimpse into the grace and beauty that figure skating has brought into my life. Each jump and spin represent countless hours 
                of hard work and unwavering dedication.  
                </p>
        </div>
        
      {/* </body> */}
      </div>
    )
}
 
export default App;
