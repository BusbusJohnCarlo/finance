import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { DashboardComponent} from './dashboard/dashboard.component';
import { FinanceRecordsComponent } from './finance-records/finance-records.component';
import { InventoryRecordsComponent } from './inventory-records/inventory-records.component';
import { PayrollRecordComponent } from './payroll-record/payroll-record.component';
import { POSRecordsComponent } from './pos-records/pos-records.component';

const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'finance', component:FinanceRecordsComponent},
  {path:'payroll', component:PayrollRecordComponent},
  {path:'POS', component:POSRecordsComponent},
  {path:'Inventory', component:InventoryRecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
