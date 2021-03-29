import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypnoseComponent } from './hypnose.component';

describe('HypnoseComponent', () => {
  let component: HypnoseComponent;
  let fixture: ComponentFixture<HypnoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HypnoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HypnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
