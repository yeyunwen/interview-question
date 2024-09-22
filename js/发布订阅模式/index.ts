type Cb = (...args: any[]) => void;
type Event = string;
export class EventBus {
  events: Record<Event, Set<Cb>> = {};
  on(event: Event, cb: Cb) {
    (this.events[event] ??= new Set()).add(cb);
  }
  emit(event: Event, ...args: any[]) {
    this.events[event]?.forEach((cb) => cb(...args));
  }
  off(event: Event, cb: Cb) {
    this.events[event]?.delete(cb);
  }
  once(event: Event, cb: Cb) {
    const fn = (...args: any[]) => {
      cb(...args);
      this.off(event, fn);
    };
    this.on(event, fn);
  }
}
