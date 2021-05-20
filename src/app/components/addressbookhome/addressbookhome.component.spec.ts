import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressbookhomeComponent } from './addressbookhome.component';

describe('AddressbookhomeComponent', () => {
  let component: AddressbookhomeComponent;
  let fixture: ComponentFixture<AddressbookhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressbookhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressbookhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
