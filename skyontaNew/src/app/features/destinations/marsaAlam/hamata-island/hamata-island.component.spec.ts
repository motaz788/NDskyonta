import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamataIslandComponent } from './hamata-island.component';

describe('HamataIslandComponent', () => {
  let component: HamataIslandComponent;
  let fixture: ComponentFixture<HamataIslandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamataIslandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamataIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
