import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnimalsComponent } from './update-animals.component';

describe('UpdateAnimalsComponent', () => {
  let component: UpdateAnimalsComponent;
  let fixture: ComponentFixture<UpdateAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnimalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
