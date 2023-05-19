import { ThisReceiver } from '@angular/compiler';
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCheckAge]'
})
export class CheckAgeDirective {

  hasView = false;

  @Input() set appcheckAge(value: boolean){
    if(!value && ! this.hasView){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }else if (value && this.hasView){
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

}
