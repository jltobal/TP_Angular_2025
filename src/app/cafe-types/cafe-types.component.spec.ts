import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeTypesComponent } from './cafe-types.component';

describe('CafeTypesComponent', () => {
  let component: CafeTypesComponent;
  let fixture: ComponentFixture<CafeTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
