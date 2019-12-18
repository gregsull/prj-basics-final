import {
    Directive,
    Renderer2,
    OnInit,
    ElementRef,
    HostListener,
    HostBinding
} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    // constructor(private elRef: ElementRef, private renderer: Renderer2){

    // }

    constructor(private elRef: ElementRef) {        
    }


    @HostListener('click') toggleOpen(eventData: Event) {
        // if (this.isOpen)
        //     this.renderer.removeClass(this.elRef.nativeElement, "open");
        // else
        //     this.renderer.addClass(this.elRef.nativeElement, "open");        
        // this.isOpen = !this.isOpen;
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen: false;
    }
}