import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArtikelComponent } from './edit-artikel.component';

describe('EditArtikelComponent', () => {
  let component: EditArtikelComponent;
  let fixture: ComponentFixture<EditArtikelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditArtikelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
