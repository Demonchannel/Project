import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: "header.component.html" ,
  styles: [` #social {
      display: flex;
      justify-content: center
  }`]
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
