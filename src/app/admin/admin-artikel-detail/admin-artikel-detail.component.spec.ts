import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtikelDetailComponent } from './admin-artikel-detail.component';

describe('AdminArtikelDetailComponent', () => {
  let component: AdminArtikelDetailComponent;
  let fixture: ComponentFixture<AdminArtikelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArtikelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArtikelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
