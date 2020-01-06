import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevstackComponent } from './devstack.component';

describe('DevstackComponent', () => {
  let component: DevstackComponent;
  let fixture: ComponentFixture<DevstackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevstackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
