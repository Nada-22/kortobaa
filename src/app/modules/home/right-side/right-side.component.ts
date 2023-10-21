import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {

  products=[
    {image:'assets/images/pic-6.png',name:' تيشرت كم طويل 52 سم ارثر وبر نسائي',rate:3,option:'new',price:140,oldPrice:200},
    {image:'assets/images/pic-4.png',name:' تيشرت كم طويل 52 سم ارثر وبر نسائي',rate:4,option:'show',price:140,oldPrice:200},
    {image:'assets/images/pic-5.png',name:' تيشرت كم طويل 52 سم ارثر وبر نسائي',rate:2,option:'',price:240,oldPrice:300},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
