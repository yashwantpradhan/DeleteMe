import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import data from "./data.json";
import bgImage from "/src/bgImage.jpg";
import SplashCursor from './components/SplashCursor.jsx'

function App() {
  return (
   
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <SplashCursor/>
      <div className=" backdrop-blur-sm min-h-screen px-4 py-10">
        <div className="text-4xl sm:text-6xl font-black text-center text-white">
          DeleteMe
        </div>
        <div className="text-white text-xl sm:text-3xl text-center mt-2 mb-8">
          A one click solution to digital detox.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          <Card
            website="Facebook"
            details="Delete facebook and face real people."
            value={data.facebook}
          />
          <Card
            website="Instagram"
            details="Remove instagram and filter your life for real."
            value={data.instagram}
          />
          <Card
            website="Twitter"
            details="Leave Twitter, speak in full sentences again."
            value={data.twitter}
          />
          <Card
            website="Snapchat"
            details="Delete Snapchat and snap back to reality."
            value={data.snapchat}
          />
          <Card
            website="Reddit"
            details="Escape the rabbit hole, delete Reddit."
            value={data.reddit}
          />
          <Card
            website="LinkedIn"
            details="Delete LinkedIn and stop pretending to make connections."
            value={data.linkedin}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
