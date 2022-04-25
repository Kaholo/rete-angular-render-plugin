(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/elements'), require('rete')) :
    typeof define === 'function' && define.amd ? define('rete-angular-render-plugin', ['exports', '@angular/core', '@angular/common', '@angular/elements', 'rete'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["rete-angular-render-plugin"] = {}, global.ng.core, global.ng.common, global.ng.elements, global.rete));
})(this, (function (exports, core, common, elements, rete) { 'use strict';

    var NodeService = /** @class */ (function () {
        function NodeService() {
        }
        NodeService.prototype.setBindings = function (bindSocket, bindControl) {
            this.bindSocket = bindSocket;
            this.bindControl = bindControl;
        };
        return NodeService;
    }());
    NodeService.decorators = [
        { type: core.Injectable }
    ];

    var NodeComponent = /** @class */ (function () {
        function NodeComponent(service, cdr) {
            this.service = service;
            this.cdr = cdr;
        }
        NodeComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.service.setBindings(this.bindSocket, this.bindControl);
            this.node.update = function () { return _this.cdr.detectChanges(); };
        };
        Object.defineProperty(NodeComponent.prototype, "inputs", {
            get: function () {
                return Array.from(this.node.inputs.values());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NodeComponent.prototype, "outputs", {
            get: function () {
                return Array.from(this.node.outputs.values());
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NodeComponent.prototype, "controls", {
            get: function () {
                return Array.from(this.node.controls.values());
            },
            enumerable: false,
            configurable: true
        });
        NodeComponent.prototype.selected = function () {
            return this.editor.selected.contains(this.node) ? 'selected' : '';
        };
        return NodeComponent;
    }());
    NodeComponent.decorators = [
        { type: core.Component, args: [{
                    template: "<div class=\"node\" [ngClass]=\"[selected(), node.name] | kebab\">\n    <div class=\"title\">{{node.name}}</div>\n    <div class=\"output\" *ngFor=\"let output of outputs\">\n        <div class=\"output-title\">{{output.name}}</div>\n        <rete-socket rete-socket [io]=\"output\" [socket]=\"output.socket\"></rete-socket>\n    </div>\n    <div class=\"control\" *ngFor=\"let control of controls\" [rete-control]=\"control\"></div>\n    <div class=\"input\" *ngFor=\"let input of inputs\">\n        <rete-socket rete-socket [io]=\"input\" [socket]=\"input.socket\"></rete-socket>\n        <div class=\"input-title\" *ngIf=\"!input.showControl()\">{{input.name}}</div>\n        <div class=\"input-control\" *ngIf=\"input.showControl()\" [rete-control]=\"input.control\"></div>\n    </div>\n</div>",
                    providers: [NodeService],
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [".node{background:rgba(110,136,255,.8);border:2px solid #4e58bf;border-radius:10px;cursor:pointer;min-width:180px;height:auto;padding-bottom:6px;box-sizing:content-box;position:relative;-webkit-user-select:none;user-select:none}.node:hover{background:rgba(130,153,255,.8)}.node.selected{background:#ffd92c;border-color:#e3c000}.node .title{color:#fff;font-family:sans-serif;font-size:18px;padding:8px}.node .output{text-align:right}.node .input{text-align:left}.node .input-title,.node .output-title{vertical-align:middle;color:#fff;display:inline-block;font-family:sans-serif;font-size:14px;margin:6px;line-height:24px}.node .input-title[hidden],.node .output-title[hidden]{display:none}.node .input-control{z-index:1;width:calc(100% - 36px);vertical-align:middle;display:inline-block}.node .control{padding:6px 18px}\n"]
                },] }
    ];
    NodeComponent.ctorParameters = function () { return [
        { type: NodeService },
        { type: core.ChangeDetectorRef }
    ]; };
    NodeComponent.propDecorators = {
        editor: [{ type: core.Input }],
        node: [{ type: core.Input }],
        bindSocket: [{ type: core.Input }],
        bindControl: [{ type: core.Input }]
    };

    var KebabPipe = /** @class */ (function () {
        function KebabPipe() {
        }
        KebabPipe.prototype.replace = function (s) {
            return s.toLowerCase().replace(/ /g, '-');
        };
        KebabPipe.prototype.transform = function (value) {
            var _this = this;
            return Array.isArray(value) ? value.map(function (s) { return _this.replace(s); }) : this.replace(value);
        };
        return KebabPipe;
    }());
    KebabPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'kebab' },] }
    ];

    var SocketComponent = /** @class */ (function () {
        function SocketComponent() {
        }
        Object.defineProperty(SocketComponent.prototype, "type", {
            get: function () {
                return this.io instanceof rete.Input ? 'input' : 'output';
            },
            enumerable: false,
            configurable: true
        });
        return SocketComponent;
    }());
    SocketComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'rete-socket',
                    template: "<div *ngIf=\"socket\" class=\"socket\" [ngClass]=\"[type, socket.name]\" [title]=\"socket.name\"></div>",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:inline-block}.socket{display:inline-block;cursor:pointer;border:1px solid white;border-radius:12px;width:24px;height:24px;margin:6px;vertical-align:middle;background:#96b38a;z-index:2;box-sizing:border-box}.socket:hover{border-width:4px}.socket.multiple{border-color:#ff0}.socket.output{margin-right:-12px}.socket.input{margin-left:-12px}\n"]
                },] }
    ];
    SocketComponent.propDecorators = {
        socket: [{ type: core.Input }],
        io: [{ type: core.Input }]
    };

    var ControlDirective = /** @class */ (function () {
        function ControlDirective(el, service) {
            this.el = el;
            this.service = service;
        }
        ControlDirective.prototype.ngOnInit = function () {
            this.service.bindControl(this.el.nativeElement, this.control);
        };
        return ControlDirective;
    }());
    ControlDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[rete-control]'
                },] }
    ];
    ControlDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: NodeService }
    ]; };
    ControlDirective.propDecorators = {
        control: [{ type: core.Input, args: ['rete-control',] }]
    };

    var SocketDirective = /** @class */ (function () {
        function SocketDirective(el, service) {
            this.el = el;
            this.service = service;
        }
        Object.defineProperty(SocketDirective.prototype, "type", {
            get: function () {
                return this.io instanceof rete.Input ? 'input' : 'output';
            },
            enumerable: false,
            configurable: true
        });
        SocketDirective.prototype.ngOnInit = function () {
            this.service.bindSocket(this.el.nativeElement, this.type, this.io);
        };
        return SocketDirective;
    }());
    SocketDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[rete-socket]'
                },] }
    ];
    SocketDirective.ctorParameters = function () { return [
        { type: core.ElementRef },
        { type: NodeService }
    ]; };
    SocketDirective.propDecorators = {
        io: [{ type: core.Input }]
    };

    var CustomComponent = /** @class */ (function () {
        function CustomComponent(vcr, injector, factoryResolver) {
            this.vcr = vcr;
            this.injector = injector;
            this.factoryResolver = factoryResolver;
        }
        CustomComponent.prototype.ngOnInit = function () {
            var factory = this.factoryResolver.resolveComponentFactory(this.component);
            var componentRef = factory.create(this.injector);
            var props = this.props;
            var _loop_1 = function (key) {
                Object.defineProperty(componentRef.instance, key, {
                    get: function () { return props[key]; },
                    set: function (val) { props[key] = val; }
                });
            };
            for (var key in props) {
                _loop_1(key);
            }
            this.vcr.insert(componentRef.hostView);
        };
        CustomComponent.prototype.ngOnDestroy = function () {
            this.vcr.detach(0);
        };
        return CustomComponent;
    }());
    CustomComponent.decorators = [
        { type: core.Component, args: [{
                    template: '',
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    CustomComponent.ctorParameters = function () { return [
        { type: core.ViewContainerRef },
        { type: core.Injector },
        { type: core.ComponentFactoryResolver }
    ]; };
    CustomComponent.propDecorators = {
        component: [{ type: core.Input }],
        props: [{ type: core.Input }]
    };

    var ReteModule = /** @class */ (function () {
        function ReteModule(injector) {
            var CustomElement = elements.createCustomElement(CustomComponent, { injector: injector });
            if (!customElements.get('rete-element'))
                customElements.define('rete-element', CustomElement);
        }
        return ReteModule;
    }());
    ReteModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        NodeComponent,
                        SocketComponent,
                        CustomComponent,
                        ControlDirective,
                        SocketDirective,
                        KebabPipe,
                    ],
                    imports: [
                        common.CommonModule
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
    ReteModule.ctorParameters = function () { return [
        { type: core.Injector }
    ]; };

    function install(editor, params) {
        if (params === void 0) { params = {}; }
        editor.on('rendernode', function (_a) {
            var el = _a.el, node = _a.node, component = _a.component, bindControl = _a.bindControl, bindSocket = _a.bindSocket;
            var ngComponent = component;
            if (ngComponent.render && ngComponent.render !== 'angular')
                return;
            var element = document.createElement('rete-element');
            var props = element;
            props.component = ngComponent.component || params.component || NodeComponent;
            props.props = Object.assign({}, ngComponent.props || {}, {
                node: node,
                editor: editor,
                bindControl: bindControl,
                bindSocket: bindSocket
            });
            el.appendChild(element);
        });
        editor.on('rendercontrol', function (_a) {
            var el = _a.el, control = _a.control;
            var ngControl = control;
            if (ngControl.render && ngControl.render !== 'angular')
                return;
            var element = document.createElement('rete-element');
            var props = element;
            props.component = ngControl.component;
            props.props = ngControl.props;
            el.appendChild(element);
        });
        editor.on(['connectioncreated', 'connectionremoved'], function (connection) {
            connection.output.node.update();
            connection.input.node.update();
        });
        editor.on('nodeselected', function () {
            editor.nodes.forEach(function (n) { return n.update(); });
        });
    }
    var AngularRenderPlugin = {
        name: 'angular-render',
        install: install
    };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AngularRenderPlugin = AngularRenderPlugin;
    exports.NodeComponent = NodeComponent;
    exports.NodeService = NodeService;
    exports.ReteModule = ReteModule;
    exports.SocketComponent = SocketComponent;
    exports["ɵa"] = CustomComponent;
    exports["ɵb"] = ControlDirective;
    exports["ɵc"] = SocketDirective;
    exports["ɵd"] = KebabPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=rete-angular-render-plugin.umd.js.map
