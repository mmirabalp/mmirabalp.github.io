import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    if (this.navbarOpen === true) {
      $('#toggleIcon').removeClass("fa-bars");
      $('#toggleIcon').addClass("fa-close");
      $('.nav-link, .round').click(function () {
        $('#collapsibleNavbar').removeClass("show");
        $('#toggleIcon').addClass("fa-bars");

        $('#toggleIcon').removeClass("fa-close");
        console.log("nav-link = " + !this.navbarOpen);
      });
      
      console.log("this.navbarOpen = TRUE");
    } else {
      
      $('#toggleIcon').removeClass("fa-close");
      $('#toggleIcon').addClass("fa-bars");
      console.log("this.navbarOpen = FALSE");
    }

  }



}
