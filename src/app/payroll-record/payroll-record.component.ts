import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-payroll-record',
  templateUrl: './payroll-record.component.html',
  styleUrls: ['./payroll-record.component.css']
})
export class PayrollRecordComponent implements OnInit {
  
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
