import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingHomeComponent } from './messaging-home.component';

describe('MessagingHomeComponent', () => {
  let component: MessagingHomeComponent;
  let fixture: ComponentFixture<MessagingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
