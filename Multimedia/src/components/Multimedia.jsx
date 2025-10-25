import image1 from '../assets/Gemini_Generated_Image_3401q53401q53401.png';
import video1 from '../assets/Recording 2025-10-23 231240.mp4'
import audio1 from '../assets/WhatsApp Audio 2025-10-23 at 23.16.22_43c46100.mp3';
import data from "../assets/data.json"


const Media=()=>{

    console.log(data)

    return <>
        {/* retrieving files from Assets  */}
        <img src={image1} alt="img" style={{width:'500px'}}/> <br />
        <video controls style={{width:'500px'}}> <source src={video1} /> </video><br />
        <audio controls ><source src={audio1}/></audio><br />

        {/* Retrieving files from public */}
        <img src="Gemini_Generated_Image_9zdha99zdha99zdh.png" alt="" style={{width:'500px'}}/> <br />
        <video controls  style={{width:'500px'}}><source src="20251023-1743-12.8114159.mp4" /></video> <br />
        <audio controls><source src="WhatsApp Audio 2025-10-23 at 23.16.22_7c4daed0.mp3"/></audio>
        {data.map((element, index)=><div key={index}><p>{element.name} {element.class}</p></div>)}
        
    </>
}

export default Media