import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReactiveComponent } from './test-reactive.component';

describe('TestReactiveComponent', () => {
  let component: TestReactiveComponent;
  let fixture: ComponentFixture<TestReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
