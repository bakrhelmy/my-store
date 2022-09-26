import { Product } from './../../interfaces/product';
import { FetchdataService } from './../../services/fetchdata.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 data:Array<any> = [];

  
  constructor( private fetchdata:FetchdataService, private router: Router) { }

  ngOnInit(): void {
   this.fetchdata.Fetchdata().subscribe(res => this.data=res)
   
  }

    addproduct(selvalue:Number,ob:any){
      this.fetchdata.datasel.push({
        url:ob.url,
        name:ob.name,
        price:ob.price,
        quan:selvalue
      })
      console.log(this.fetchdata.datasel);
      
    }
    routedetails(i:Number){
      this.router.navigate(['item',i])

    }


}
