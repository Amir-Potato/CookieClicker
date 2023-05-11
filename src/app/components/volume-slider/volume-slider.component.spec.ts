import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeSliderComponent } from './volume-slider.component';

describe('VolumeSliderComponent', () => {
  let component: VolumeSliderComponent;
  let fixture: ComponentFixture<VolumeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolumeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
