import style from './index.module.less';
import $ from 'jquery';
//动态获取资源文件的路径
import videoSrc from '@/assets/movie.mp4';
//动态获取资源文件的路径
import audioSrc from '@/assets/music.mp3';
function init(){
   const container = $('<div>').addClass(style.container).appendTo('#app');
   const vdo = $('<video>')
   .prop('src', videoSrc)
   .prop('autoplay', true)
   .prop('muted',true)
   .prop('loop',true)
   .addClass(style.video)
   .appendTo(container);
   const ado = $('<audio>')
   .prop('src', audioSrc)
   .prop('autoplay', true)
   .prop('loop',true)
   .appendTo(container);
}
init();
