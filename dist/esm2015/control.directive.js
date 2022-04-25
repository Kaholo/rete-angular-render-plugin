import { Directive, Input, ElementRef } from '@angular/core';
import { NodeService } from './node.service';
export class ControlDirective {
    constructor(el, service) {
        this.el = el;
        this.service = service;
    }
    ngOnInit() {
        this.service.bindControl(this.el.nativeElement, this.control);
    }
}
ControlDirective.decorators = [
    { type: Directive, args: [{
                selector: '[rete-control]'
            },] }
];
ControlDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NodeService }
];
ControlDirective.propDecorators = {
    control: [{ type: Input, args: ['rete-control',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUs3QyxNQUFNLE9BQU8sZ0JBQWdCO0lBRzNCLFlBQW9CLEVBQWMsRUFBVSxPQUFvQjtRQUE1QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7SUFFcEUsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7WUFWRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjthQUMzQjs7O1lBTjBCLFVBQVU7WUFFNUIsV0FBVzs7O3NCQU1qQixLQUFLLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJ3JldGUnO1xuaW1wb3J0IHsgTm9kZVNlcnZpY2UgfSBmcm9tICcuL25vZGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyZXRlLWNvbnRyb2xdJ1xufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdyZXRlLWNvbnRyb2wnKSBjb250cm9sITogQ29udHJvbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHNlcnZpY2U6IE5vZGVTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VydmljZS5iaW5kQ29udHJvbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY29udHJvbCk7XG4gIH1cbn1cbiJdfQ==