import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Input as ReteInput } from 'rete';
export class SocketComponent {
    get type() {
        return this.io instanceof ReteInput ? 'input' : 'output';
    }
}
SocketComponent.decorators = [
    { type: Component, args: [{
                selector: 'rete-socket',
                template: `<div *ngIf="socket" class="socket" [ngClass]="[type, socket.name]" [title]="socket.name"></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:inline-block}.socket{display:inline-block;cursor:pointer;border:1px solid white;border-radius:12px;width:24px;height:24px;margin:6px;vertical-align:middle;background:#96b38a;z-index:2;box-sizing:border-box}.socket:hover{border-width:4px}.socket.multiple{border-color:#ff0}.socket.output{margin-right:-12px}.socket.input{margin-left:-12px}\n"]
            },] }
];
SocketComponent.propDecorators = {
    socket: [{ type: Input }],
    io: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zb2NrZXQvc29ja2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQWMsS0FBSyxJQUFJLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVN0RCxNQUFNLE9BQU8sZUFBZTtJQUkxQixJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxFQUFFLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMzRCxDQUFDOzs7WUFaRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxpR0FBaUc7Z0JBRTNHLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7O3FCQUVFLEtBQUs7aUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTb2NrZXQsIElPLCBJbnB1dCBhcyBSZXRlSW5wdXQgfSBmcm9tICdyZXRlJztcbmltcG9ydCB7IFNvY2tldFR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldGUtc29ja2V0JyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwic29ja2V0XCIgY2xhc3M9XCJzb2NrZXRcIiBbbmdDbGFzc109XCJbdHlwZSwgc29ja2V0Lm5hbWVdXCIgW3RpdGxlXT1cInNvY2tldC5uYW1lXCI+PC9kaXY+YCxcbiAgc3R5bGVVcmxzOiBbJy4vc29ja2V0LmNvbXBvbmVudC5zYXNzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNvY2tldENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNvY2tldCE6IFNvY2tldDtcbiAgQElucHV0KCkgaW8hOiBJTztcblxuICBnZXQgdHlwZSgpOiBTb2NrZXRUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5pbyBpbnN0YW5jZW9mIFJldGVJbnB1dCA/ICdpbnB1dCcgOiAnb3V0cHV0JztcbiAgfVxufVxuIl19