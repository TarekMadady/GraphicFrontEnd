import React,{useState, useEffect} from "react";
import StudentHeader from "../general/header/StudentHeader";

import { useParams } from "react-router-dom";
const ShowVideoUser = () => {
  const token = localStorage.getItem("token");
  const [videoData, setVideoData] = useState('');
  const pram = useParams();
  const { vid } = pram;
  useEffect(() => {
    const myData = async () => { 
      const response = await fetch(
      `https://api.motiongraphic.tech/admin/video/details/${vid}`,
      {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    const vname = data.videoFile.split('http://api.motiongraphic.tech/videos/')[1];
    setVideoData(vname);
    };
    myData();
  },[]);
  return (
    <>
      <StudentHeader />
      <div className="container mt-3">
        <div className="row">
          <div className="col-6 mx-auto">
            {videoData ? <video controls className="w-100"><source src={`https://api.motiongraphic.tech/videos/${videoData}`} type="video/mp4"/></video> :<></>}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowVideoUser;
