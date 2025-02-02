import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolphinHouseComponent } from './dolphin-house.component';

describe('DolphinHouseComponent', () => {
  let component: DolphinHouseComponent;
  let fixture: ComponentFixture<DolphinHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DolphinHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolphinHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
