import { Socket, IO } from 'rete';
import { SocketType } from '../types';
export declare class SocketComponent {
    socket: Socket;
    io: IO;
    get type(): SocketType;
}
