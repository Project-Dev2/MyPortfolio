import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}