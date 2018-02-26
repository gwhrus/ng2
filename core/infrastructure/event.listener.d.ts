import { EventManager } from './event.manager';

type IOnResult = () => void;

export declare class EventListener {
	constructor(element: Element, manager: EventManager);

	on(name: string, f: (arg: any) => void, settings?: any): IOnResult;
	off(): void;
}
