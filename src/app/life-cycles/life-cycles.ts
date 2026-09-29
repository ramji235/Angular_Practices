import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life-cycles',
  imports: [],
  templateUrl: './life-cycles.html',
  styleUrl: './life-cycles.css'
})
export class LifeCycles
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input() userName: string = 'Angular Students';

  counter = 0;

  lifecycleStatus: string[] = [];

  componentCreated = true;

  constructor() {
    this.addStatus('Constructor Executed');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.addStatus('ngOnChanges Executed');
  }

  ngOnInit(): void {
    this.addStatus('ngOnInit Executed');
  }

  ngDoCheck(): void {
    // DoCheck frequently execute hota hai.
    // Yahan UI data change nahi karna.
  }

  ngAfterContentInit(): void {
    this.addStatus('ngAfterContentInit Executed');
  }

  ngAfterContentChecked(): void {
    // IMPORTANT:
    // Yahan lifecycleStatus change mat karo.
  }

  ngAfterViewInit(): void {
    // IMPORTANT:
    // Yahan lifecycleStatus change mat karo.
  }

  ngAfterViewChecked(): void {
    // Frequently execute hota hai.
    // Yahan UI data change mat karo.
  }

  ngOnDestroy(): void {
    // Cleanup logic:
    // unsubscribe()
    // clearInterval()
    // removeEventListener()
  }

  increaseCounter(): void {
    this.counter++;
  }

  decreaseCounter(): void{
    this.counter--;
  }

  changeName(): void {
    this.userName =
      this.userName === 'Angular Students'
        ? 'Pushpendra'
        : 'Angular Students';
  }

  addStatus(message: string): void {
    this.lifecycleStatus.push(message);
  }

  destroyComponent(): void {
    this.componentCreated = false;
  }

  recreateComponent(): void {
    this.componentCreated = true;
  }
}