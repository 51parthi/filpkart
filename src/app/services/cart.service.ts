import { Injectable } from '@angular/core';
import { BehaviorSubject}  from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartitemlist : any = [];
  public productlist = new BehaviorSubject <any>([]);
  public search = new BehaviorSubject<string>("");
  constructor() { }
  getProducts(){
    return this.productlist.asObservable()
  }
setproduct(products :any){
this.cartitemlist.push(...products);
this.productlist.next(products);
}
addtocart(products:any){
  this.cartitemlist.push(products);
  this.productlist.next(this.cartitemlist);
  this.getTotalprice();
  console.log(this.cartitemlist)
}
getTotalprice():number{
  let grandTotal = 0;
  this.cartitemlist.map((a:any)=>{
    grandTotal += a.total;

  })
  return grandTotal;
}
removecartitem(products:any){
  this.cartitemlist.map((a:any,index:any)=>{
    if(products.id=== a.id){
      this.cartitemlist.splice(index,1);
    }
  })
  this.productlist.next(this.cartitemlist);

}
removeAllcart(){
  this.cartitemlist= [];
  this.productlist.next (this.cartitemlist);
}
}