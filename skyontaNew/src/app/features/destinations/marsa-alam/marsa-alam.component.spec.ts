import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsaAlamComponent } from './marsa-alam.component';

describe('MarsaAlamComponent', () => {
  let component: MarsaAlamComponent;
  let fixture: ComponentFixture<MarsaAlamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarsaAlamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarsaAlamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
