import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbuDababComponent } from './abu-dabab.component';

describe('AbuDababComponent', () => {
  let component: AbuDababComponent;
  let fixture: ComponentFixture<AbuDababComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbuDababComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbuDababComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
