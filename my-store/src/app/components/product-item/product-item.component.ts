import { FetchdataService } from './../../services/fetchdata.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  datbase:Array<any>=[]
  i:any
  constructor(private dta: FetchdataService,private activelink: ActivatedRoute ) { }

  ngOnInit(): void {
    this.dta.Fetchdata().subscribe(res => this.datbase=res)
    this.i=this.activelink.snapshot.params['i']
  }
  addproduct(selvalue:Number,i:Number){
    this.dta.datasel.push({id: i,value: selvalue})
    console.log(this.dta.datasel);
    
  }

}
