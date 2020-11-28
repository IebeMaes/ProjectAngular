import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtikelComponent } from './admin-artikel.component';

describe('AdminArtikelComponent', () => {
  let component: AdminArtikelComponent;
  let fixture: ComponentFixture<AdminArtikelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminArtikelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
