import { ComponentFixture, TestBed } from '@angular/core/testing';
import { information } from './information';

describe('information', () => {
  let component: information;
  let fixture: ComponentFixture<information>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [information]
    })
    .compileComponents();

    fixture = TestBed.createComponent(information);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
