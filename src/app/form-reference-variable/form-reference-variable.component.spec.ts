import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReferenceVariableComponent } from './form-reference-variable.component';

describe('FormReferenceVariableComponent', () => {
  let component: FormReferenceVariableComponent;
  let fixture: ComponentFixture<FormReferenceVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReferenceVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
