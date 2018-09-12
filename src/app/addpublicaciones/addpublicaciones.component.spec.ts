import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpublicacionesComponent } from './addpublicaciones.component';

describe('AddpublicacionesComponent', () => {
  let component: AddpublicacionesComponent;
  let fixture: ComponentFixture<AddpublicacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpublicacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpublicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
