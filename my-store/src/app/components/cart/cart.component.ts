import { FetchdataService } from './../../services/fetchdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data:any
  constructor(private fe:FetchdataService) { }

  ngOnInit(): void {
    this.data=this.fe.datasel
  }
  change(inval:any,i:any){

  }
  price(){
    return
  }

}
