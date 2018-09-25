import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingViewComponent } from './messaging-view.component';

describe('MessagingViewComponent', () => {
  let component: MessagingViewComponent;
  let fixture: ComponentFixture<MessagingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
