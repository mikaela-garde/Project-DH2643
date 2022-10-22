import React, {useState} from 'react';
import ExpBoardGridView from "./ExpBoardGridView";
import {uploadAPI, downloadAPI} from "../../webAPI/webAPI";
import { v4 as uuid } from 'uuid';

function ExpBoardGridPresenter (props) {
  const images = [
    {
       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
       width: 1000,
       height: 1000,
       caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
       src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
       width: 320,
       height: 212,
       alt: "Boats (Jeshu John - designerspics.com)",
       caption: "fkdzglkzfdgökfjdzngökjnfdöjgfdbäfdkävpjkfpdsföksdpfkoådskfodskvkmlv kxncvkncxvn"
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
      caption: "After Rain (Jeshu John - designerspics.com)After Rain (Jeshu John - designerspics.com)After Rain (Jeshu John - designerspics.com)After Rain (Jeshu John - designerspics.com)After Rain (Jeshu John - designerspics.com)"
   },{
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 555,
    caption: "kjsnjfkdj" 
 },{
  src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  width: 323,
  height: 313,
},{
  src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  width: 320,
  height: 122,
},{
  src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  width: 443,
  height: 345,
},{
  src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  width: 321,
  height: 212,
},
 ];

    
  return React.createElement(ExpBoardGridView, {
    images: images
  })
}


export default ExpBoardGridPresenter;
