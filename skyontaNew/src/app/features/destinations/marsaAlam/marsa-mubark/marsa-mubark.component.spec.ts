import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsaMubarkComponent } from './marsa-mubark.component';

describe('MarsaMubarkComponent', () => {
  let component: MarsaMubarkComponent;
  let fixture: ComponentFixture<MarsaMubarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarsaMubarkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarsaMubarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
