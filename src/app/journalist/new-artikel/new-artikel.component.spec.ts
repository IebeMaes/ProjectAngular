import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArtikelComponent } from './new-artikel.component';

describe('NewArtikelComponent', () => {
  let component: NewArtikelComponent;
  let fixture: ComponentFixture<NewArtikelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewArtikelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
