import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  title:string;
  fname:string;
  lname:string;
  ngOnInit() {
    this.title = 'Mr.';
    this.fname ='Akshay';
    this.lname = 'Nayak';
  }
onSubmit(formdata:any){
this.fname = formdata.fname;
this.lname = formdata.lname;
}
}
