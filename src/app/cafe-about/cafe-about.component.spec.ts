import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeAboutComponent } from './cafe-about.component';

describe('CafeAboutComponent', () => {
  let component: CafeAboutComponent;
  let fixture: ComponentFixture<CafeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
