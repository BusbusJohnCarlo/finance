import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-pos-records',
  templateUrl: './pos-records.component.html',
  styleUrls: ['./pos-records.component.css']
})
export class POSRecordsComponent implements OnInit {

  constructor() { }
  
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  ngOnInit(): void {
  }

}
