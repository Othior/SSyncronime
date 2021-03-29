import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenteHypnoseComponent } from './differente-hypnose.component';

describe('DifferenteHypnoseComponent', () => {
  let component: DifferenteHypnoseComponent;
  let fixture: ComponentFixture<DifferenteHypnoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferenteHypnoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferenteHypnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
