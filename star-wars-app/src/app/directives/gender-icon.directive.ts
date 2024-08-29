import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGenderIcon]' // Selector para usar en el HTML
})
export class GenderIconDirective implements OnInit {

  @Input('appGenderIcon') set gender(value: string) {
    this._gender = value as 'male' | 'female' | 'n/a';
  }

  private _gender: 'male' | 'female' | 'n/a' = 'n/a'; 

  private iconMap: { [key in 'male' | 'female' | 'n/a']: string } = {
    'male': '♂',
    'female': '♀',
    'n/a': '?'
  };

  private colorMap: { [key in 'male' | 'female' | 'n/a']: string } = {
    'male': 'blue',
    'female': 'red',
    'n/a': 'gray'
  };

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const icon = this.iconMap[this._gender];
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', icon);

    const color = this.colorMap[this._gender];
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
