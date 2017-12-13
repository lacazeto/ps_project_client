import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserAccComponent } from './view-user-acc.component';

describe('ViewUserAccComponent', () => {
  let component: ViewUserAccComponent;
  let fixture: ComponentFixture<ViewUserAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
