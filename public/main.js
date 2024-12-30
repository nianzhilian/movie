// import a from './a.js';
// import b from './b.js';

// //除了代码和样式文件，其他文件被称为资源模块 比如 图片，在样式中使用图片时 引入的路径 和打包后的路径是不一样的
// //因为webpack非常智能的发现了这一点,在webpack打包时会将资源路径自动打包成打包结果的路径
// //但是如果通过js中引入资源路径的方式来使用资源文件时，需要注意路径的正确性，正确的做法时将资源文件通过 模块引入到js中，然后通过webpack打包后的路径来使用资源文件

// //导入jquery模块
// import $ from 'jquery';

// //导入图片资源文件
// //这样引入路径 就相当于引入的是打包结果的路径
// import url from '@/a.png';

// //省略后缀名 其实是导入的 home目录下的index.js文件
// import home from './home'

// console.log(a); // 'a'
// console.log(b); // 'b'
// console.log('c')

// $('<img />').prop('src', url).appendTo(document.body);

// console.log(home)

// //使用less文件   
//import './index.less';
import $ from 'jquery';
import style1 from './a.module.css'
import style2 from './b.module.css'

console.log(style1)
console.log(style2)
$('<h1>').text("a.module.less中的类样式a").addClass(style1.a).appendTo(document.body);
$('<h1>').text("b.module.less中的类样式b").addClass(style2.b).appendTo(document.body);