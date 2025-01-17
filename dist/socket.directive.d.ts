import { ElementRef, OnInit } from '@angular/core';
import { IO } from 'rete';
import { NodeService } from './node.service';
import { SocketType } from './types';
export declare class SocketDirective implements OnInit {
    private el;
    private service;
    io: IO;
    constructor(el: ElementRef, service: NodeService);
    get type(): SocketType;
    ngOnInit(): void;
}
