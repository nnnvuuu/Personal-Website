import React,{Component} from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { light } from '@material-ui/core/styles/createPalette';
import './Music.css';
import Her from '../Music/images/her.jpg';


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

  {
    name: '离歌',
    singer: '草东没有派对',
    cover:
      'https://mocah.org/thumbs/5399787-tree-woodland-forest-dark-night-sky-stars-milky-way-black-black-and-white-silhouette-hill-night-sky-startrail-minimalistic-astrophotography-free-stock-photos.jpg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1638524419/blog%20music/%E7%A6%BB%E6%AD%8C-%E8%8D%89%E4%B8%9C%E6%B2%A1%E6%9C%89%E6%B4%BE%E5%AF%B9_ypy13m.mp3'
  
  },
 
 
  {
    name: '海底',
    singer: '一支榴莲',
    cover:
      'https://i.ytimg.com/vi/v5gK8np-OTA/maxresdefault.jpg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1609896225/blog%20music/%E6%B5%B7%E5%BA%95-%E4%B8%80%E6%94%AF%E6%A6%B4%E8%8E%B2%E5%90%AC%E6%AD%8C%E8%87%B4%E9%83%81%E4%BD%A0%E7%9A%84%E5%AD%A4%E7%8B%AC%E6%97%A0%E4%BA%BA%E5%8F%AF%E4%BB%A5%E5%88%B0%E8%BE%BE%E5%8A%A8%E6%80%81Lyric%E7%89%B9%E6%95%88%E4%B8%80%E9%A6%96%E8%B6%85%E5%A5%BD%E5%90%AC%E7%9A%84%E8%87%B4%E9%83%81%E7%B3%BB%E6%AD%8C%E6%9B%B2_emo5eq.mp3'
  
  },


  {
    name: '重要的事物就在眼睑之下闪烁',
    singer: 'Kokia',
    cover:
      'https://b-ssl.duitang.com/uploads/item/201408/01/20140801211332_L3hER.thumb.700_0.jpeg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1638525401/blog%20music/%E5%A4%A7%E4%BA%8B%E3%81%AA%E3%82%82%E3%81%AE%E3%81%AF%E7%9B%AE%E8%93%8B%E3%81%AE%E8%A3%8F_1_tqr7sg.mp3'
  
  },




  {
    name: 'One Last Kiss',
    singer: "._.",
    cover:
      'https://www.otaquest.com/wp-content/uploads/2021/03/One-Last-Kiss-TOP.jpg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1631254430/blog%20music/One_Last_Kiss_ijxptz.mp3'
  
  },


  {
    name: '宇航员',
    singer: "めありー",
    cover:
      'https://img.youtube.com/vi/b1mU4zH-p8Q/hqdefault.jpg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1637112924/blog%20music/%E5%86%8D%E8%A7%81_wntqlt.mp3'
  
  },

  



  {
    name: '秦皇岛',
    singer: '万能青年旅店',
    cover:
      'https://lh3.googleusercontent.com/proxy/pAUl4PgA7Zb5zuYN0FY7eBw2zez8tsi-2-tQ1O5-GpGseKKLhScYT_WJaj85ImyFkwv83qRsMpsnPYNbo18xrijsnBASJF_cevFqAmHlgQ',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1611205771/blog%20music/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97_%E7%A7%A6%E7%9A%87%E5%B3%B6_lyrics_dayqll.mp3'
  
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
