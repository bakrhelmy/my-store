import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onsubmit(name: any){
    this.router.navigate(["result",name])
  }

}
