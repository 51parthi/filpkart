import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

public productList : any;
searchkey:string="";
  constructor( private api :ApiService ,private cartservice :CartService) { }

  ngOnInit(): void {
    this.api.getproducts().subscribe(res=>{
      this.productList = res;
      this.productList.forEach((a:any) => {
        
        Object.assign(a,{quantity:1,total:a.price});
        });
    });

     this.cartservice.search.subscribe((val:any)=>{
      this.searchkey = val;
     })
  }
 addtocart(item:any){
 this.cartservice.addtocart(item);
 }
}
