import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() name :string;
  @Input() mrp :number;

  constructor() { }

  ngOnInit(): void {
  }
  checkIt(){
    var editedPrice =prompt("enter edited price");
    console.log('edited Price ',editedPrice);
   }

}
