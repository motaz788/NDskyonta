import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatayhaComponent } from './satayha.component';

describe('SatayhaComponent', () => {
  let component: SatayhaComponent;
  let fixture: ComponentFixture<SatayhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatayhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatayhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
