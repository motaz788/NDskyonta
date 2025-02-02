import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtopiaIslandComponent } from './utopia-island.component';

describe('UtopiaIslandComponent', () => {
  let component: UtopiaIslandComponent;
  let fixture: ComponentFixture<UtopiaIslandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtopiaIslandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtopiaIslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
