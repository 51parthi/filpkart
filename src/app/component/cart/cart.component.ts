import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public products : any = [];
public grandtotal!: number ;
  constructor(private cardservices:CartService) { }

  ngOnInit(): void {
  this.cardservices.getProducts()
  .subscribe(res=>{
    this.products = res;
    this.grandtotal = this.cardservices.getTotalprice();
  })

  }
removeItem(item:any){
this.cardservices.removecartitem(item);
}
emptycart(){
  this.cardservices.removeAllcart();
}
}
