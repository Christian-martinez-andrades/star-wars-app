import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenderIconDirective } from './gender-icon.directive';

// Componente de prueba para utilizar la directiva
@Component({
  template: `<span [appGenderIcon]="gender"></span>`
})
class TestComponent {
  gender: 'male' | 'female' | 'n/a' = 'n/a';
}

describe('GenderIconDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directiveEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenderIconDirective, TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directiveEl = fixture.nativeElement.querySelector('span');
  });

  it('should display male icon and color blue', () => {
    component.gender = 'male';
    fixture.detectChanges();

    expect(directiveEl.innerHTML).toBe('♂');
    expect(window.getComputedStyle(directiveEl).color).toBe('rgb(0, 0, 255)'); // Blue color in RGB
  });

  it('should display female icon and color red', () => {
    component.gender = 'female';
    fixture.detectChanges();

    expect(directiveEl.innerHTML).toBe('♀');
    expect(window.getComputedStyle(directiveEl).color).toBe('rgb(255, 0, 0)'); // Red color in RGB
  });

  it('should display n/a icon and color gray', () => {
    component.gender = 'n/a';
    fixture.detectChanges();

    expect(directiveEl.innerHTML).toBe('?');
    expect(window.getComputedStyle(directiveEl).color).toBe('rgb(128, 128, 128)'); // Gray color in RGB
  });
});
