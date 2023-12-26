import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDataComponent } from './prof-data.component';

describe('ProfDataComponent', () => {
  let component: ProfDataComponent;
  let fixture: ComponentFixture<ProfDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfDataComponent]
    });
    fixture = TestBed.createComponent(ProfDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
