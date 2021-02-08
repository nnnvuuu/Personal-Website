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
 
 
  {
    name: '海底',
    singer: '一支榴莲',
    cover:
      'https://i.ytimg.com/vi/v5gK8np-OTA/maxresdefault.jpg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1609896225/blog%20music/%E6%B5%B7%E5%BA%95-%E4%B8%80%E6%94%AF%E6%A6%B4%E8%8E%B2%E5%90%AC%E6%AD%8C%E8%87%B4%E9%83%81%E4%BD%A0%E7%9A%84%E5%AD%A4%E7%8B%AC%E6%97%A0%E4%BA%BA%E5%8F%AF%E4%BB%A5%E5%88%B0%E8%BE%BE%E5%8A%A8%E6%80%81Lyric%E7%89%B9%E6%95%88%E4%B8%80%E9%A6%96%E8%B6%85%E5%A5%BD%E5%90%AC%E7%9A%84%E8%87%B4%E9%83%81%E7%B3%BB%E6%AD%8C%E6%9B%B2_emo5eq.mp3'
  
  },

  {
    name: '秦皇岛',
    singer: '万能青年旅店',
    cover:
      'https://lh3.googleusercontent.com/proxy/pAUl4PgA7Zb5zuYN0FY7eBw2zez8tsi-2-tQ1O5-GpGseKKLhScYT_WJaj85ImyFkwv83qRsMpsnPYNbo18xrijsnBASJF_cevFqAmHlgQ',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1611205771/blog%20music/%E4%B8%87%E8%83%BD%E9%9D%92%E5%B9%B4%E6%97%85%E5%BA%97_%E7%A7%A6%E7%9A%87%E5%B3%B6_lyrics_dayqll.mp3'
  
  },
 
  {
    name: 'Jazz with coffee',
    singer: 'not important',
    cover:
      'https://www.udiscovermusic.com/wp-content/uploads/2019/04/best-jazz-songs.jpg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1612287673/blog%20music/coding_sleeping/yt1s.com_-_1_Hour_Jazz_Music_Coffee_Bar_Instrumental_Lounge_Music_446_ggksnr.mp3'
  
  },

  {

    name: 'l o v e m e',
    singer: 'p l e a s e',
    cover:
      'https://i.ytimg.com/vi/ZqwfusOI3Xo/maxresdefault.jpg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1612287935/blog%20music/coding_sleeping/yt1s.com_-_%EF%BC%AE%EF%BC%AF_%EF%BC%B3%EF%BC%AC%EF%BC%A5%EF%BC%A5%EF%BC%B0_1_Hour_Version_pqblsh.mp3'

  },

  {

    name: 'jazz sht',
    singer: 'not important',
    cover:
      'https://www.udiscovermusic.com/wp-content/uploads/2019/04/best-jazz-songs.jpg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1612287713/blog%20music/coding_sleeping/yt1s.com_-_1_Hour_of_Jazzy_Doomer_Music_REUPLOAD_onsme8.mp3'

  },

  {

    name: 'a l o n e',
    singer: 'w h o c a r e s',
    cover:
      'https://i1.sndcdn.com/artworks-000282751853-umedl7-t500x500.jpg',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1612287857/blog%20music/coding_sleeping/yt1s.com_-_Lazy_Sunday_lofi_hip_hopchill_beats_mrp1le.mp3'

  },

  
  {

    name: 'old time was gold',
    singer: 'Ghibli',
    cover:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b627f8c8-2fa4-41f4-9325-cab7cf2da81e/d71xeup-0b637170-719f-4c16-aa33-c5fb19ba3dbc.png/v1/fill/w_1024,h_725,strp/alternate_studio_ghibli_logo_by_rfwu_d71xeup-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjUiLCJwYXRoIjoiXC9mXC9iNjI3ZjhjOC0yZmE0LTQxZjQtOTMyNS1jYWI3Y2YyZGE4MWVcL2Q3MXhldXAtMGI2MzcxNzAtNzE5Zi00YzE2LWFhMzMtYzVmYjE5YmEzZGJjLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZOn7TlmHlwRT5_A0yrXFtN8SFIk8rdisHAwAxD50cfo',
    musicSrc:
      'https://res.cloudinary.com/dgemakazn/video/upload/v1612287767/blog%20music/coding_sleeping/yt1s.com_-_Stunning_Studio_Ghibli_Soundtracks_gg7knm.mp3'

  },

  

  {

    name: 'ｄｅｃｅｐｔｉｏｎ',
    singer: '?',
    musicSrc: 'https://res.cloudinary.com/dgemakazn/video/upload/v1612766368/blog%20music/coding_sleeping/%EF%BD%84%EF%BD%85%EF%BD%83%EF%BD%85%EF%BD%90%EF%BD%94%EF%BD%89%EF%BD%8F%EF%BD%8E_tbxxsp.mp3'

  },

  {

    name: 'ＨＥＡＲＴＢＲＯＫＥＮ',
    singer: '?',
    musicSrc: 'https://res.cloudinary.com/dgemakazn/video/upload/v1612766545/blog%20music/coding_sleeping/%EF%BC%A8%EF%BC%A5%EF%BC%A1%EF%BC%B2%EF%BC%B4%EF%BC%A2%EF%BC%B2%EF%BC%AF%EF%BC%AB%EF%BC%A5%EF%BC%AE_igzdgk.mp3'

  },



  {

    name: 'J E A L O U S Y',
    singer: '?',
    musicSrc: 'https://res.cloudinary.com/dgemakazn/video/upload/v1612766752/blog%20music/coding_sleeping/J_E_A_L_O_U_S_Y_pxijem.mp3'

  },


  {

    name: 'ＴＯＯ ＤＥＰＲＥＳＳＥＤ',
    singer: '?',
    musicSrc: 'https://res.cloudinary.com/dgemakazn/video/upload/v1612766995/blog%20music/coding_sleeping/%EF%BC%B4%EF%BC%AF%EF%BC%AF_%EF%BC%A4%EF%BC%A5%EF%BC%B0%EF%BC%B2%EF%BC%A5%EF%BC%B3%EF%BC%B3%EF%BC%A5%EF%BC%A4_wbxqgq.mp3'

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
