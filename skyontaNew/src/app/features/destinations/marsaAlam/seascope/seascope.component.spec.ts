import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeascopeComponent } from './seascope.component';

describe('SeascopeComponent', () => {
  let component: SeascopeComponent;
  let fixture: ComponentFixture<SeascopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeascopeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeascopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
