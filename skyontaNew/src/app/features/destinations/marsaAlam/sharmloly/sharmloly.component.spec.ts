import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharmlolyComponent } from './sharmloly.component';

describe('SharmlolyComponent', () => {
  let component: SharmlolyComponent;
  let fixture: ComponentFixture<SharmlolyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharmlolyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharmlolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
