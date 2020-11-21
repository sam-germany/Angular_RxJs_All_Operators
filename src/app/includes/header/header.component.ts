import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navOpen:boolean = false;

  exclusive:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onNavToggle(){
    this.navOpen = !this.navOpen
  }
}
