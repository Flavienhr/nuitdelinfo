import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueGameComponent } from './dialogue-game.component';

describe('DialogueGameComponent', () => {
  let component: DialogueGameComponent;
  let fixture: ComponentFixture<DialogueGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogueGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
