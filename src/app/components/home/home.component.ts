import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faUsersBetweenLines}  from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faUsersBetweenLines =faUsersBetweenLines;
  constructor(private router:Router){}
  gotoUsers(){
this.router.navigate(['user'])
  }
}
