import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PayrollRecordComponent } from './payroll-record/payroll-record.component';
import { POSRecordsComponent } from './pos-records/pos-records.component';
import { InventoryRecordsComponent } from './inventory-records/inventory-records.component';
import { FinanceRecordsComponent } from './finance-records/finance-records.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PayrollRecordComponent,
    POSRecordsComponent,
    InventoryRecordsComponent,
    FinanceRecordsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    ReactiveFormsModule,
    // MatTableDataSource,
    MatTableModule,
    MatGridListModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
