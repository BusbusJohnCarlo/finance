import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  symbols: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', symbols:'A' },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' , symbols:'A'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' , symbols:'A'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , symbols:'A'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B' , symbols:'A'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', symbols:'A'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', symbols:'A'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', symbols:'A'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', symbols:'A'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', symbols:'A'},
];
@Component({
  selector: 'app-finance-records',
  templateUrl: './finance-records.component.html',
  styleUrls: ['./finance-records.component.css']
})

export class FinanceRecordsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','symbols', 'action'];
  dataSource = ELEMENT_DATA;
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


  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
  ngOnInit(): void {
  }

}
