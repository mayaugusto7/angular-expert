import {
  Component, Input, Output, EventEmitter,
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked
} from "@angular/core";

@Component({
  selector: 'div[my-child-comp]',
  template: `<h2>These are the lifecycle events for a child component:</h2>
            <p class="lead">Child component initial lifecycle events:</p>
            <p>{{initialChildEvents}}</p>
            <p class="lead">Child component continuous lifecycle events:</p>
            <p>{{continuousChildEvents}}</p>
            <button class="btn btn-success" type="button" (click)="onClick()">Send message from 
              child to parent</button>`
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked {

  initialChildEvents: string[];
  continuousChildEvents: string[];

  @Output() onChildMessage = new EventEmitter<string>();

  private hasInitialLifecycleFinished: boolean = false;
  private ngAfterViewCheckedEventCount: number = 0;

  constructor() {
    this.initialChildEvents = [];
    this.continuousChildEvents = [];
  }

  private logEvent(message: string) {
    if (!this.hasInitialLifecycleFinished) {
      this.initialChildEvents.push(message);
    } else {
      this.continuousChildEvents.push(message);
    }
  }

  ngOnChanges(): void {
    this.logEvent(`[${new Date().toLocaleTimeString()}] - ngOnChanges.`)
  }

  ngOnInit(): void {
    this.logEvent(`[${new Date().toLocaleTimeString()}] - ngOnInit.`);
  }

  ngDoCheck(): void {
    this.logEvent(`[${new Date().toLocaleTimeString()}] - ngDoCheck.`)
  }

  ngAfterContentInit(): void {
    this.logEvent(`[${new Date().toLocaleTimeString()}] - ngAfterContentInit.`)
  }

  ngAfterContentChecked(): void {
    this.logEvent(`[${new Date().toLocaleTimeString()}] - ngAfterContentChecked.`)
  }

  ngAfterViewInit(): void {
    this.logEvent(`[${new Date().toLocaleTimeString()}] - ngAfterViewInit.`)
  }

  ngAfterViewChecked(): void {
    this.ngAfterViewCheckedEventCount += 1;

    if (this.ngAfterViewCheckedEventCount === 2) {
      this.hasInitialLifecycleFinished = true;
    }

    this.logEvent(`[${new Date().toLocaleTimeString()}] - ngAfterViewChecked.`);
    console.log(`[${new Date().toLocaleTimeString()}] - ngAfterViewChecked.`);
  }

  onClick() {
    this.onChildMessage.emit(`Hello from ChildComponent at: ${new Date().toLocaleTimeString()}`);
    console.log('Disparando mensagem...')
  }

}
