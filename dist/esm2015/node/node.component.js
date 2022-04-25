import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NodeService } from '../node.service';
export class NodeComponent {
    constructor(service, cdr) {
        this.service = service;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.service.setBindings(this.bindSocket, this.bindControl);
        this.node.update = () => this.cdr.detectChanges();
    }
    get inputs() {
        return Array.from(this.node.inputs.values());
    }
    get outputs() {
        return Array.from(this.node.outputs.values());
    }
    get controls() {
        return Array.from(this.node.controls.values());
    }
    selected() {
        return this.editor.selected.contains(this.node) ? 'selected' : '';
    }
}
NodeComponent.decorators = [
    { type: Component, args: [{
                template: "<div class=\"node\" [ngClass]=\"[selected(), node.name] | kebab\">\n    <div class=\"title\">{{node.name}}</div>\n    <div class=\"output\" *ngFor=\"let output of outputs\">\n        <div class=\"output-title\">{{output.name}}</div>\n        <rete-socket rete-socket [io]=\"output\" [socket]=\"output.socket\"></rete-socket>\n    </div>\n    <div class=\"control\" *ngFor=\"let control of controls\" [rete-control]=\"control\"></div>\n    <div class=\"input\" *ngFor=\"let input of inputs\">\n        <rete-socket rete-socket [io]=\"input\" [socket]=\"input.socket\"></rete-socket>\n        <div class=\"input-title\" *ngIf=\"!input.showControl()\">{{input.name}}</div>\n        <div class=\"input-control\" *ngIf=\"input.showControl()\" [rete-control]=\"input.control\"></div>\n    </div>\n</div>",
                providers: [NodeService],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".node{background:rgba(110,136,255,.8);border:2px solid #4e58bf;border-radius:10px;cursor:pointer;min-width:180px;height:auto;padding-bottom:6px;box-sizing:content-box;position:relative;-webkit-user-select:none;user-select:none}.node:hover{background:rgba(130,153,255,.8)}.node.selected{background:#ffd92c;border-color:#e3c000}.node .title{color:#fff;font-family:sans-serif;font-size:18px;padding:8px}.node .output{text-align:right}.node .input{text-align:left}.node .input-title,.node .output-title{vertical-align:middle;color:#fff;display:inline-block;font-family:sans-serif;font-size:14px;margin:6px;line-height:24px}.node .input-title[hidden],.node .output-title[hidden]{display:none}.node .input-control{z-index:1;width:calc(100% - 36px);vertical-align:middle;display:inline-block}.node .control{padding:6px 18px}\n"]
            },] }
];
NodeComponent.ctorParameters = () => [
    { type: NodeService },
    { type: ChangeDetectorRef }
];
NodeComponent.propDecorators = {
    editor: [{ type: Input }],
    node: [{ type: Input }],
    bindSocket: [{ type: Input }],
    bindControl: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbm9kZS9ub2RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFROUMsTUFBTSxPQUFPLGFBQWE7SUFNeEIsWUFBc0IsT0FBb0IsRUFBWSxHQUFzQjtRQUF0RCxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBQVksUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFBRyxDQUFDO0lBRWhGLFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwRSxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULHl5QkFBb0M7Z0JBRXBDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDeEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7WUFQUSxXQUFXO1lBRmdDLGlCQUFpQjs7O3FCQVdsRSxLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb2RlRWRpdG9yLCBOb2RlLCBJbnB1dCBhcyBSZXRlSW5wdXQsIE91dHB1dCBhcyBSZXRlT3V0cHV0LCBDb250cm9sIGFzIFJldGVDb250cm9sIH0gZnJvbSAncmV0ZSc7XG5pbXBvcnQgeyBOb2RlU2VydmljZSB9IGZyb20gJy4uL25vZGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vbm9kZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25vZGUuY29tcG9uZW50LnNhc3MnXSxcbiAgcHJvdmlkZXJzOiBbTm9kZVNlcnZpY2VdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOb2RlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZWRpdG9yITogTm9kZUVkaXRvcjtcbiAgQElucHV0KCkgbm9kZSE6IE5vZGU7XG4gIEBJbnB1dCgpIGJpbmRTb2NrZXQhOiBGdW5jdGlvbjtcbiAgQElucHV0KCkgYmluZENvbnRyb2whOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc2VydmljZTogTm9kZVNlcnZpY2UsIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VydmljZS5zZXRCaW5kaW5ncyh0aGlzLmJpbmRTb2NrZXQsIHRoaXMuYmluZENvbnRyb2wpO1xuICAgIHRoaXMubm9kZS51cGRhdGUgPSAoKSA9PiB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBnZXQgaW5wdXRzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMubm9kZS5pbnB1dHMudmFsdWVzKCkpO1xuICB9XG5cbiAgZ2V0IG91dHB1dHMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5ub2RlLm91dHB1dHMudmFsdWVzKCkpO1xuICB9XG5cbiAgZ2V0IGNvbnRyb2xzKCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMubm9kZS5jb250cm9scy52YWx1ZXMoKSk7XG4gIH1cblxuICBzZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lZGl0b3Iuc2VsZWN0ZWQuY29udGFpbnModGhpcy5ub2RlKSA/ICdzZWxlY3RlZCcgOiAnJztcbiAgfVxufVxuIl19