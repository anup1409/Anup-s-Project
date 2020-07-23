import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoanteRequestComponent } from './doante-request.component';

describe('DoanteRequestComponent', () => {
  let component: DoanteRequestComponent;
  let fixture: ComponentFixture<DoanteRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoanteRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoanteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
