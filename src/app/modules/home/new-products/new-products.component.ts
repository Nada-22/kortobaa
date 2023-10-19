import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {

  products=[
    {image:'assets/images/pic.png',name:'تيشرت كم طول 52 سم',rate:3,option:'new',price:120,oldPrice:150},
    {image:'assets/images/pic-1.png',name:'تيشرت كم طول 52 سم',rate:5,option:'new',price:110,oldPrice:160},
    {image:'assets/images/pic-2.png',name:'تيشرت كم طول 52 سم',rate:2,option:'show',price:100,oldPrice:140},
    {image:'assets/images/pic-3.png',name:'تيشرت كم طول 52 سم',rate:4,option:'new',price:150,oldPrice:170},
    {image:'assets/images/pic-4.png',name:'تيشرت كم طول 52 سم',rate:4,option:'show',price:140,oldPrice:200},
    {image:'assets/images/pic-5.png',name:'تيشرت كم طول 52 سم',rate:2,option:'show',price:240,oldPrice:300},
    {image:'assets/images/pic-6.png',name:'تيشرت كم طول 52 سم',rate:3,option:'new',price:140,oldPrice:200},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
