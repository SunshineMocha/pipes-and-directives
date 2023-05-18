import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCheckAge]'
})
export class CheckAgeDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  @Input() set appUnless(condition: boolean) {
    condition = true;
  }
}
