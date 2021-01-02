import React,{Component} from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { light } from '@material-ui/core/styles/createPalette';
import './Music.css';



const audioList1 = [
  {
    name: '虚拟',
    singer: '王贰浪',
    cover:
      'https://img.bq233.com/upload/2019/1028/5db69eec3da61.jpg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1608441788/blog%20music/%E8%99%9A%E6%8B%9F_qi7gtr.mp3'
  
  },

  {
    name: '蒸发',
    singer: '好樂團',
    cover:
      'https://i1.sndcdn.com/artworks-000209040897-iwpkbn-t500x500.jpg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1609204535/blog%20music/%E5%A5%BD%E6%A8%82%E5%9C%98_GoodBand%E8%92%B8%E7%99%BC_Demo_buflac.mp3'
  
  },

  {
    name: '还愿',
    singer: '草东没有派对',
    cover:
      'https://vignette.wikia.nocookie.net/devotion/images/b/b5/DevotionPress1.png/revision/latest/scale-to-width-down/620?cb=20190203155605&path-prefix=zh-tw',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1609608039/blog%20music/%E9%82%84%E9%A1%98_-_%E9%82%84%E9%A1%98_ixitqx.mp3'
  
  },
 
 
]


const options = {
  // audio lists model
  audioLists: audioList1,
  defaultPlayMode:"orderLoop",
  defaultPlayIndex: 0,
  loadAudioErrorPlayNext:true,
  remove: false,
  showMiniProcessBar:true,
  defaultPosition: {
    top: 80,
    right: 50,
  },
  glassBg:true,
  // mode:'full'
  
}



   
    

export default class Music extends Component{
  constructor(props) {
   
    super(props);

    // this.state={
    //   WindowSize : window.innerWidth,
    //   top:30,
    //   right:70,
    // }
    // this.handleResize = this.handleResize.bind(this);
  }

//   componentDidMount() {
//     window.addEventListener("resize", this.handleResize);
//   }

//   handleResize() {
//     this.setState({WindowSize: window.innerWidth})
// }
  
  
  render() {
    // {console.log(this.state.WindowSize)}
  

    // {
      
    //   if(this.state.WindowSize<960){
    //   this.setState({
    //     top:60,
    //     right:70,
    //   })
    // }
    // }
  
  return(
   
    <div>
  <ReactJkMusicPlayer

   
   {...options}
   
   
   />
  </div>
  );
  }
}
