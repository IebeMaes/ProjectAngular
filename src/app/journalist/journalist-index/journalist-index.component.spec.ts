import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalistIndexComponent } from './journalist-index.component';

describe('JournalistIndexComponent', () => {
  let component: JournalistIndexComponent;
  let fixture: ComponentFixture<JournalistIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalistIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalistIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
