import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSpecialButton]'
})
export class SpecialButtonDirective {

  _appSpecialButton: string = "red"

  @Input() set appSpecialButton(value:string){
    this._appSpecialButton = value;
    this.element.nativeElement.style.backgroundColor = this._appSpecialButton;
  };

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = this.appSpecialButton;
  }

}

/*
  PER LAVORARE DOBBIAMO IMPORTARE ELEMENTREF
  PASSO LA DIRECTIVE AL NOSTRO HTML. LA DIRETTIVA È PASSATA DA APPSPECIALBUTTON IN @DIRECTIVE
  SOTTO SELECTOR, CHE DOVRÓ USARE COME ATTRIBUTO AL NOSTRO TAG.
  PER COSTRUIRLO LO METTO NEL CONSTRUCTOR O NELL'INPUT A SECONDA DEI CASI
*/
