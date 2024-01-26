import React, {
  useState,
  useEffect
} from "react";


const ShowVideo = (props) => {
  const token = localStorage.getItem("token");
  const [videoData, setVideoData] = useState('');

  useEffect(() => {
    const myData = async () => {
      const response = await fetch(
        `https://tutorial.tarekmadady.com/admin/video/details/${props.id}`, {
          method: "GET",
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      const data = await response.json();
      const vname = data.videoFile.split('http://api.motiongraphic.tech/videos/')[1];
      setVideoData(vname);
      console.log(vname);
      // console.log("my Data "+response);
      // return data;
    };
    myData();
  }, []);
  return ( <
    div className = "row" >
    <
    div className = "col-11 mx-auto" >
    <
    div className = "card" >
    <
    div className = "card-header" >
    <
    h5 className = "card-title mb-0" > {
      /* {videoData && videoData.videoTitle} */ } <
    /h5> <
    /div> <
    div className = "card-body" > {
      /* <iframe  src={`https://tutorial.tarekmadady.com/videos/${videoData}`} className="w-100"></iframe> */ } {
      /* <ReactPlayer url={`https://tutorial.tarekmadady.com/videos/${videoData}`} /> */ } {
      videoData ? < video controls className = "w-100" > < source src = {
        `https://tutorial.tarekmadady.com/videos/${videoData}`
      }
      type = "video/mp4" / > < /video> : <></ >
    }

    <
    /div> <
    /div> <
    /div> <
    /div>
  );
};

export default ShowVideo;