import React, { useState } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import MovieListing from "./MovieListing";

const Movies = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "DARK",
      imgSrc: "https://wallpapercave.com/wp/wp4056410.jpg",
      category: "Drama",
      link: "https://www.netflix.com/in/title/80990668?souece=35",
    },
    {
      id: 2,
      name: "Stranger Things",
      imgSrc: "https://wallpapercave.com/wp/wp1917154.jpg",
      category: "Comedy",
      link: "https://www.netflix.com/in/title/80990668?souece=35",
    },
    {
      id: 3,
      name: "Fate",
      imgSrc:
        "https://occ-0-4163-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQkgDKRLx6Glzqkocau3EJbCTHhMs0N0eUIorzQFeQVQRRRiJwT4rhppJ15vTV5S76SZhqXQWTq9JbOo2M3V_tKBdl8nb4EbrRZPau4TGqXU_Jm7-4T9XbpaN0_CVjzD0juPXw.jpg?r=575",
      category: "Thriller",
      link: "https://www.netflix.com/in/title/80990668?souece=35",
    },
    {
      id: 4,
      name: "Wednesday",
      imgSrc:
        "https://occ-0-4163-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWAJSAFzlJdOuv3_snQnw4OH_1vJtwRT1OMdvTMm5gnR56Ng0Gxo6MUtSL6zq4zr32yxCfaDT2oDhwrnYhv6aUXXiyJ1189gchRTk677wNHIi1Nf2gYqVkcCqbENJPTbIewEBA.jpg?r=082",
      category: "Action",
      link: "https://www.netflix.com/in/title/80990668?souece=35",
    },
    {
      id: 5,
      name: "Sweet Tooth",
      imgSrc:
        "https://occ-0-4163-58.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfrc6MgrOwmQINLkRTm3MI1Hkxzva8I9s6ZeaoPk12SJOuRtytx4I65x3nSM4pC853zxfTINzv6RHPMV8sPc49MiqHMoC4P7SbwPQazDZX82a3T3SUQE56bIg7tZOetU2va5H-QKUr_BDMpl3DseOU0RrlC1u3E8h7-Dcer6dhEbroIbkJE2F0B5t0k8ZhtkWIJd5CMWhqhEuqmpwT4-JiG37CrYtsugkPYlswiao2Xg9Gx0Hd0lsaDSKtXSrG2IiTWF6AwPd-Q24__QXUB0Cn98nTcpwJDuu70l-NGZhUHjBIqwsijf.jpg?r=f34",
      category: "Fantasy",
      link: "https://www.netflix.com/in/title/80990668?souece=35",
    },
  ]);
  const addMovie = (movie) => {
    setData([...data, movie]);
  };
  return (
    <div>
      <h1
        style={{ textAlign: "center", marginTop: 100 }}
        className="main-heading"
      >
        My Movies App
      </h1>
      <AddMovie addMovie={addMovie} />

      <MovieListing data={data} />
    </div>
  );
};

export default Movies;
