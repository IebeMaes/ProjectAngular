import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJournalistComponent } from './add-journalist.component';

describe('AddJournalistComponent', () => {
  let component: AddJournalistComponent;
  let fixture: ComponentFixture<AddJournalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJournalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJournalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
