import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAssociateComponent } from './card-associate.component';

describe('CardAssociateComponent', () => {
  let component: CardAssociateComponent;
  let fixture: ComponentFixture<CardAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAssociateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
