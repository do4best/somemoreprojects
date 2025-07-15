import React from 'react';
import Title from "../Esignature/title.jsx";
import dog from "../../assets/mydog.jpg";
import {AiFillHeart, AiFillSmile, AiOutlineComment, AiOutlineHeart} from "react-icons/ai";

function MainLikeMyPhoto() {
  const [like, setLike] = React.useState(false);
  const toggleLike=()=>{
      if (like){
          setLike(false)
      }else{
          setLike(true)
      }
  }
    return (
        <>

        <Title name={"Like My Photo"}/>
            <Title name={"Likes"} classes={"text-primary text-xl"}/>
            <div className="flex flex-col justify-center items-center  ">
            <div className="card-body  rounded bg-blue-400 w-[300px]">
                <div className="flex flex-row justify-center items-center gap-5">
                <AiFillSmile size={30}/>
                <div className={"card-title"}>Like My Photo</div>
                </div>

            </div>
                <img src={dog} alt="dog" className="w-[300px] h-[600px] object-cover rounded" />
                <div className="  ">
                    <div className="w-[300px] h-[30px] flex flex-row justify-between items-center bg-red-400">
                    <AiOutlineComment size={30}/>
                    {like?<AiFillHeart size={30} onClick={toggleLike}/>:<AiOutlineHeart size={30} onClick={toggleLike}/>}
                    </div></div>
            </div>
        </>
    );
}

export default MainLikeMyPhoto;