import { Directive, Input, ElementRef } from '@angular/core';
import { Input as ReteInput } from 'rete';
import { NodeService } from './node.service';
export class SocketDirective {
    constructor(el, service) {
        this.el = el;
        this.service = service;
    }
    get type() {
        return this.io instanceof ReteInput ? 'input' : 'output';
    }
    ngOnInit() {
        this.service.bindSocket(this.el.nativeElement, this.type, this.io);
    }
}
SocketDirective.decorators = [
    { type: Directive, args: [{
                selector: '[rete-socket]'
            },] }
];
SocketDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NodeService }
];
SocketDirective.propDecorators = {
    io: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zb2NrZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQU0sS0FBSyxJQUFJLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNN0MsTUFBTSxPQUFPLGVBQWU7SUFHeEIsWUFBb0IsRUFBYyxFQUFVLE9BQW9CO1FBQTVDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQUcsQ0FBQztJQUVwRSxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxFQUFFLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMzRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7OztZQWRKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7O1lBUDBCLFVBQVU7WUFFNUIsV0FBVzs7O2lCQU9mLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElPLCBJbnB1dCBhcyBSZXRlSW5wdXQgfSBmcm9tICdyZXRlJztcbmltcG9ydCB7IE5vZGVTZXJ2aWNlIH0gZnJvbSAnLi9ub2RlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ja2V0VHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmV0ZS1zb2NrZXRdJ1xufSlcbmV4cG9ydCBjbGFzcyBTb2NrZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIGlvITogSU87XG4gIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgc2VydmljZTogTm9kZVNlcnZpY2UpIHt9XG4gIFxuICAgIGdldCB0eXBlKCk6IFNvY2tldFR5cGUge1xuICAgICAgcmV0dXJuIHRoaXMuaW8gaW5zdGFuY2VvZiBSZXRlSW5wdXQgPyAnaW5wdXQnIDogJ291dHB1dCc7XG4gICAgfVxuICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMuc2VydmljZS5iaW5kU29ja2V0KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy50eXBlLCB0aGlzLmlvKTtcbiAgICB9XG59XG4iXX0=