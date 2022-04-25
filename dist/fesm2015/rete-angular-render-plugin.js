import { Injectable, Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Pipe, Directive, ElementRef, ViewContainerRef, Injector, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { Input as Input$1 } from 'rete';

class NodeService {
    setBindings(bindSocket, bindControl) {
        this.bindSocket = bindSocket;
        this.bindControl = bindControl;
    }
}
NodeService.decorators = [
    { type: Injectable }
];

class NodeComponent {
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

class KebabPipe {
    replace(s) {
        return s.toLowerCase().replace(/ /g, '-');
    }
    transform(value) {
        return Array.isArray(value) ? value.map(s => this.replace(s)) : this.replace(value);
    }
}
KebabPipe.decorators = [
    { type: Pipe, args: [{ name: 'kebab' },] }
];

class SocketComponent {
    get type() {
        return this.io instanceof Input$1 ? 'input' : 'output';
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

class ControlDirective {
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

class SocketDirective {
    constructor(el, service) {
        this.el = el;
        this.service = service;
    }
    get type() {
        return this.io instanceof Input$1 ? 'input' : 'output';
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

class CustomComponent {
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

class ReteModule {
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

function install(editor, params = {}) {
    editor.on('rendernode', ({ el, node, component, bindControl, bindSocket }) => {
        const ngComponent = component;
        if (ngComponent.render && ngComponent.render !== 'angular')
            return;
        const element = document.createElement('rete-element');
        const props = element;
        props.component = ngComponent.component || params.component || NodeComponent;
        props.props = Object.assign({}, ngComponent.props || {}, {
            node,
            editor,
            bindControl,
            bindSocket
        });
        el.appendChild(element);
    });
    editor.on('rendercontrol', ({ el, control }) => {
        const ngControl = control;
        if (ngControl.render && ngControl.render !== 'angular')
            return;
        const element = document.createElement('rete-element');
        const props = element;
        props.component = ngControl.component;
        props.props = ngControl.props;
        el.appendChild(element);
    });
    editor.on(['connectioncreated', 'connectionremoved'], connection => {
        connection.output.node.update();
        connection.input.node.update();
    });
    editor.on('nodeselected', () => {
        editor.nodes.forEach(n => n.update());
    });
}
const AngularRenderPlugin = {
    name: 'angular-render',
    install
};

/**
 * Generated bundle index. Do not edit.
 */

export { AngularRenderPlugin, NodeComponent, NodeService, ReteModule, SocketComponent, CustomComponent as ɵa, ControlDirective as ɵb, SocketDirective as ɵc, KebabPipe as ɵd };
//# sourceMappingURL=rete-angular-render-plugin.js.map
