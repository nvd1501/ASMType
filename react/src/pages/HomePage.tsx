import React from 'react'
import '../main.css';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";


const HomePage = () => {
    return (
      <div className="text-center">

      <Link className="no-underline text-white text-[25px]" to={'products'}><button className="bg-black px-4 py-2 my-4 rounded-lg">Products --{'>'}</button></Link>
      <div className="ml-[280px]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=K4tmy9PK4Is"
          width="640px"
          height="360px"
          playing={true}
          controls={false}
        />
      </div>
    </div>
    )
}

export default HomePage