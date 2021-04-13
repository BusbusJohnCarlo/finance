import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POSRecordsComponent } from './pos-records.component';

describe('POSRecordsComponent', () => {
  let component: POSRecordsComponent;
  let fixture: ComponentFixture<POSRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POSRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POSRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
