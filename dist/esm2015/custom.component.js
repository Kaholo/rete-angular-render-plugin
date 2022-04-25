import { Component, Input, Injector, ComponentFactoryResolver, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';
export class CustomComponent {
    constructor(vcr, injector, factoryResolver) {
        this.vcr = vcr;
        this.injector = injector;
        this.factoryResolver = factoryResolver;
    }
    ngOnInit() {
        const factory = this.factoryResolver.resolveComponentFactory(this.component);
        const componentRef = factory.create(this.injector);
        const { props } = this;
        for (let key in props) {
            Object.defineProperty(componentRef.instance, key, {
                get() { return props[key]; },
                set(val) { props[key] = val; }
            });
        }
        this.vcr.insert(componentRef.hostView);
    }
    ngOnDestroy() {
        this.vcr.detach(0);
    }
}
CustomComponent.decorators = [
    { type: Component, args: [{
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CustomComponent.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: Injector },
    { type: ComponentFactoryResolver }
];
CustomComponent.propDecorators = {
    component: [{ type: Input }],
    props: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxnQkFBZ0IsRUFBUSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU85SSxNQUFNLE9BQU8sZUFBZTtJQUkxQixZQUNVLEdBQXFCLEVBQ3JCLFFBQWtCLEVBQ2xCLGVBQXlDO1FBRnpDLFFBQUcsR0FBSCxHQUFHLENBQWtCO1FBQ3JCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsb0JBQWUsR0FBZixlQUFlLENBQTBCO0lBQ2hELENBQUM7SUFFSixRQUFRO1FBQ04sTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0UsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztRQUV2QixLQUFJLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtZQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO2dCQUNoRCxHQUFHLEtBQUssT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixHQUFHLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQy9CLENBQUMsQ0FBQTtTQUNIO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDs7O1lBTnNFLGdCQUFnQjtZQUFwRCxRQUFRO1lBQUUsd0JBQXdCOzs7d0JBUWxFLEtBQUs7b0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgSW5qZWN0b3IsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgVmlld0NvbnRhaW5lclJlZiwgVHlwZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlOiAnJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb21wb25lbnQhOiBUeXBlPENvbXBvbmVudD47XG4gIEBJbnB1dCgpIHByb3BzITogUHJvcHM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBmYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuZmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuY29tcG9uZW50KTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSBmYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuXG4gICAgZm9yKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb21wb25lbnRSZWYuaW5zdGFuY2UsIGtleSwge1xuICAgICAgICBnZXQoKSB7IHJldHVybiBwcm9wc1trZXldOyB9LFxuICAgICAgICBzZXQodmFsKSB7IHByb3BzW2tleV0gPSB2YWw7IH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy52Y3IuaW5zZXJ0KGNvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnZjci5kZXRhY2goMCk7XG4gIH1cbn1cbiJdfQ==