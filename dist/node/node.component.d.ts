import { ChangeDetectorRef } from '@angular/core';
import { NodeEditor, Node, Input as ReteInput, Output as ReteOutput, Control as ReteControl } from 'rete';
import { NodeService } from '../node.service';
export declare class NodeComponent {
    protected service: NodeService;
    protected cdr: ChangeDetectorRef;
    editor: NodeEditor;
    node: Node;
    bindSocket: Function;
    bindControl: Function;
    constructor(service: NodeService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    get inputs(): ReteInput[];
    get outputs(): ReteOutput[];
    get controls(): ReteControl[];
    selected(): "selected" | "";
}
