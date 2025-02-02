import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NefertariComponent } from './nefertari.component';

describe('NefertariComponent', () => {
  let component: NefertariComponent;
  let fixture: ComponentFixture<NefertariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NefertariComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NefertariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
