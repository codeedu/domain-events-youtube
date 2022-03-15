import EventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default interface EventDispatcherInterface {
  register(eventName: string, handler: EventHandlerInterface): void;
  notify(event: EventInterface): void;
}
