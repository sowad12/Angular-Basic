import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  name:string="sowad";
  counter:number=0;
   product={
    name:'iphone',
    price:999,
    color:"Red",
    discountPrice:8.5,
    stock:0
  }
getDiscountPrice(){
  return (this.product.price - (this.product.price * this.product.discountPrice / 100)).toFixed(2)
} 
//event binding
onNameChange(event:any){
//  console.log(event.target.value)
 this.name=event.target.value
}
increment(){
  this.counter++;
}
decrement(){
  this.counter--;
}
 arr:number[]=[10,20,30,40];
}
