import React,{useState,useEffect,useRef} from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import styled from "https://cdn.skypack.dev/styled-components@5.3.5";

const data = [
    {
        headding:`AirPods Pro`
    },
    {
        headding: `Active Noise Cancellation
        for immersive sound.`
    },
    {
        headding: `Transparency mode for hearing what’s happening around you.`
    },{
        headding: `A customizable fit
        for all-day comfort.`
    },
]

const useElementPosition = (element,frames,initialValue)=>{
    const [position,setPosition] = useState(initialValue || 1)
    useEffect(()=>{
        window.addEventListener('scroll',getFrameRates)
        return () => window.removeEventListener("scroll",getFrameRates)
    })

    function getFrameRates(){
        let rect = element.current.getBoundingClientRect()
        let mainVal = rect.top<=0? Math.abs(rect.top):0
        let height = rect.height - window.innerHeight
        let finalPercentage =   Math.floor((frames * mainVal) / height)
        setPosition(finalPercentage<=frames?finalPercentage:frames)
    }

    return position || 1
}

const HeaderDiv = styled.div`
width:100%;
 background-color: rgb(0, 0, 0,0.8);
  color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 height: 50px;
`
 const Main = styled.div`
width: 100%;
height: 300vh;
background-color: black;

position: relative;
`

 const ImageDiv = styled.div`
 position: sticky;
 top: 0;
 width: 100%;
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
 /* & >img{
     width: ${(prop)=>(1000-prop.imageFrame)+"px"};
 } */
 
`

const TextDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  overflow: hidden;
  & > div{
      position: absolute;
      top: -${(prop)=>(100*prop.index)}%;
      height: ${(prop)=> 100 * prop.dataLength}%;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: top 0.5s ease;
      & > h1{
          text-align: center;
          width: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
          height: 100%;
         color: white;
         font-size: 60px;
  }
  }
  
`



const Header = () => {
  return (
    <HeaderDiv>
        <h3>Header</h3>
    </HeaderDiv>
  )
}



const ScrollAnimation = () => {
    const [textIndex,setTextIndex] = useState(0)
    const elementRef = useRef(null)
    const totalFrames = 144
    const imageFrame = useElementPosition(elementRef,totalFrames,1)
    const getImage = (frame) => (`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${frame.toString().padStart(4, '0')}.jpg`)

   useEffect(()=>{
    let index = getTextIndexPercentage()
    if(index<data.length) setTextIndex(index)
   },[imageFrame]) 
  
  const preloadImages = () => {
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src =`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${i.toString().padStart(4, '0')}.jpg`
    }
  };

preloadImages()


   function getTextIndexPercentage(){
   return Math.floor(((data.length) * imageFrame) / totalFrames )
   }

   function getImageWidthPercentage(){
       return Math.floor((200 * imageFrame) / totalFrames)
   }


  return (
    <Main ref={elementRef} >
        <ImageDiv imageFrame={imageFrame} >
       <img style={{
           width:`${800-getImageWidthPercentage()}px`
       }} src={getImage(imageFrame)} alt=""/>
       <TextDiv index={textIndex} dataLength={data.length}>
           <div >
               {data?.map(({headding},i)=>{
               return  <h1 style={{
                   opacity:i===textIndex?1:0
               }} >{headding}</h1>
           })}
           </div>
           
       </TextDiv>
       </ImageDiv>
       
    </Main>
  )
}


function App() {
  return (
    <div className="App">
      <Header/>
       <ScrollAnimation />
    </div>
  );
}




ReactDOM.render(<App />, document.getElementById("root"));