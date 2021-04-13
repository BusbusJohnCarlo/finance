import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-inventory-records',
  templateUrl: './inventory-records.component.html',
  styleUrls: ['./inventory-records.component.css']
})
export class InventoryRecordsComponent implements OnInit {
  
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
  constructor() { }

  ngOnInit(): void {
  }

}
