import { Component, HostListener, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  onscroll() {
    this.scrollFunction()
  }

  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btn-back-to-top").style.display = "block";
    } else {
        document.getElementById("btn-back-to-top").style.display = "none";
    }
  }
  
  topFunction() {
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE and Opera
  }

}
