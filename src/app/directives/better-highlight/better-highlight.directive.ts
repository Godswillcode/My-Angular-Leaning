import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBetterHighLight]'
})

export class BetterHighLightDirective implements OnInit{
    @Input() defaultColor: string = 'transparent';
    @Input() highLightColor: string = 'blue'
    @HostBinding('style.backgroundColor') backgroundColor: string

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    ngOnInit(): void {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
        this.backgroundColor = this.defaultColor
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', );
        this.backgroundColor = this.highLightColor
    }

    
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor
    }
}