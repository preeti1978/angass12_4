import { Directive, ElementRef,Renderer,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective {
@Input('color') color;
  constructor(public elemRef:ElementRef, public renderer:Renderer) { }

//HostListener is a directive which you can apply on a function. HostListener will listen to events 
//happening on the host. Host is any html element having your directive name: appTextHighlight-->

//Once moouseenter event is fired, this function will be called. It will set background color of the h2 as the input color
@HostListener('mouseenter') onmouseenter(){
	this.renderer.setElementStyle(this.elemRef.nativeElement,'background-color',this.color);
}

@HostListener('mouseleave') onmouseleave(){
	this.renderer.setElementStyle(this.elemRef.nativeElement,'background-color','');
}

}
