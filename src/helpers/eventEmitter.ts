class EventEmitter {
  private events: any;
  constructor() {
    this.events = {};
  }

  subscribe(eventName: string, fn: (data: any) => void): () => void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(fn);

    return () => {
      this.events[eventName] = this.events[eventName].filter(
        (eventFn: (data: any) => void) => fn !== eventFn,
      );
    };
  }

  emit(eventName: string, data?: any) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName].forEach((callback: any) => callback(data));
  }
}

export enum AppEvents {
  OverlaySpinner = 'overlay-spinner',
}

export const AppEventEmitter = new EventEmitter();
