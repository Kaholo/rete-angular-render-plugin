import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { KebabPipe } from './kebab.pipe';
import { NodeComponent } from './node/node.component';
import { SocketComponent } from './socket/socket.component';
import { ControlDirective } from './control.directive';
import { SocketDirective } from './socket.directive';
import { CustomComponent } from './custom.component';
export class ReteModule {
    constructor(injector) {
        const CustomElement = createCustomElement(CustomComponent, { injector });
        if (!customElements.get('rete-element'))
            customElements.define('rete-element', CustomElement);
    }
}
ReteModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NodeComponent,
                    SocketComponent,
                    CustomComponent,
                    ControlDirective,
                    SocketDirective,
                    KebabPipe,
                ],
                imports: [
                    CommonModule
                ],
                providers: [
                    KebabPipe,
                    ControlDirective
                ],
                exports: [
                    NodeComponent,
                    CustomComponent,
                    SocketComponent,
                    ControlDirective,
                    SocketDirective,
                    KebabPipe
                ],
                entryComponents: [
                    NodeComponent,
                    SocketComponent,
                    CustomComponent
                ]
            },] }
];
ReteModule.ctorParameters = () => [
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFnQ3JELE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQVksUUFBa0I7UUFDNUIsTUFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsZUFBZSxFQUFFLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7WUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7WUFsQ0YsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsU0FBUztpQkFDVjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsU0FBUztvQkFDVCxnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxhQUFhO29CQUNiLGVBQWU7b0JBQ2YsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsU0FBUztpQkFDVjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2YsYUFBYTtvQkFDYixlQUFlO29CQUNmLGVBQWU7aUJBQ2hCO2FBQ0Y7OztZQXhDa0IsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGNyZWF0ZUN1c3RvbUVsZW1lbnQgfSBmcm9tICdAYW5ndWxhci9lbGVtZW50cyc7XG5cbmltcG9ydCB7IEtlYmFiUGlwZSB9IGZyb20gJy4va2ViYWIucGlwZSc7XG5pbXBvcnQgeyBOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9ub2RlL25vZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNvY2tldENvbXBvbmVudCB9IGZyb20gJy4vc29ja2V0L3NvY2tldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gJy4vY29udHJvbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU29ja2V0RGlyZWN0aXZlIH0gZnJvbSAnLi9zb2NrZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEN1c3RvbUNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE5vZGVDb21wb25lbnQsXG4gICAgU29ja2V0Q29tcG9uZW50LFxuICAgIEN1c3RvbUNvbXBvbmVudCxcbiAgICBDb250cm9sRGlyZWN0aXZlLFxuICAgIFNvY2tldERpcmVjdGl2ZSxcbiAgICBLZWJhYlBpcGUsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgS2ViYWJQaXBlLFxuICAgIENvbnRyb2xEaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vZGVDb21wb25lbnQsXG4gICAgQ3VzdG9tQ29tcG9uZW50LFxuICAgIFNvY2tldENvbXBvbmVudCxcbiAgICBDb250cm9sRGlyZWN0aXZlLFxuICAgIFNvY2tldERpcmVjdGl2ZSxcbiAgICBLZWJhYlBpcGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgTm9kZUNvbXBvbmVudCxcbiAgICBTb2NrZXRDb21wb25lbnQsXG4gICAgQ3VzdG9tQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUmV0ZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGluamVjdG9yOiBJbmplY3RvcikgeyAvLyBTdGF0aWNJbmplY3RvckVycm9yIGR1ZSB0byAnbnBtIGxpbmsnXG4gICAgY29uc3QgQ3VzdG9tRWxlbWVudCA9IGNyZWF0ZUN1c3RvbUVsZW1lbnQoQ3VzdG9tQ29tcG9uZW50LCB7IGluamVjdG9yIH0pO1xuICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdyZXRlLWVsZW1lbnQnKSkgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdyZXRlLWVsZW1lbnQnLCBDdXN0b21FbGVtZW50KTtcbiAgfVxufVxuIl19