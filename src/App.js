import { useState } from "react";
import "./styles.css";
import React from "react";

const channelList = {
  coding: [
    {
      name: "tanay Pratap",
      subs: "60k"
    },
    {
      name: "akshay saini",
      subs: "40k"
    }
    ,
    {
      name: "traversy media",
      subs: "400k"
    }
  ],
  podcast: [
    {
      name: "beerbiceps",
      subs: "60m"
    },
    {
      name: "joerogan",
      subs: "40m"
    },
    {
      name: "random chikibum",
      subs: "2m"
    }
  ],
  chess: [
    {
      name: "samay raina",
      subs: "600k"
    },
    {
      name: "chessbase india",
      subs: "400k"
    },
    {
      name: "chess talks",
      subs: "900k"
    }
  ]
};

export default function App() {
  const [selectedGenere, setSelectedGenere] = useState("chess");

  function setGenere(genere) {
    setSelectedGenere(genere);
  }
  return (
    <div className="App">
      <h1><span>🧙‍♂️</span>Youtube Channel Recommendations</h1>
      <p>
        Below are some of my most recommeded youtube Channel that you guys
        should definately check out.
      </p>
      {Object.keys(channelList).map((genere) => (
        <button key={genere} onClick={() => setGenere(genere)}>
          {genere}
        </button>
      ))}

      <hr />
      <div>{  
      channelList.[selectedGenere].map((book) => (
       
           <div key={book.name} className="list-item">
             <h3>{book.name}</h3>
              <p>{book.subs} Subscribers</p>
             </div>
         )) 
      }</div>
    </div>
  );
}
