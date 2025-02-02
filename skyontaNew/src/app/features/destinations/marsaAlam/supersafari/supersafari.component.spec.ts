import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersafariComponent } from './supersafari.component';

describe('SupersafariComponent', () => {
  let component: SupersafariComponent;
  let fixture: ComponentFixture<SupersafariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupersafariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupersafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
