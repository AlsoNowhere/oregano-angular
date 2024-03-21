import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// const initialState = {
//   plum: 'chum',
// };

// @Injectable({
//   providedIn: 'root',
// })
// export class StateService {
//   private stateSource = new BehaviorSubject<any>(initialState);
//   currentState = this.stateSource.asObservable();
//   constructor() {}
//   updateState(newState: any) {
//     this.stateSource.next(newState);
//   }
// }

// @Component({
//   selector: 'Lemon',
//   template: `<div>
//     <span>Lemon: {{ state.plum }}</span>
//     <button type="button" (click)="updateState({ plum: 'orange' })"></button>
//   </div>`,
// })
// export class Lemon implements OnInit {
//   state: any;

//   constructor(private stateService: StateService) {}

//   ngOnInit(): void {
//     this.stateService.currentState.subscribe((state) => (this.state = state));
//   }

//   updateState(newState: any) {
//     this.stateService.updateState(newState);
//   }
// }

// @Component({
//   selector: 'Apple',
//   template: `<div>
//     <span>Apple: {{ state.plum }}</span>
//     <button type="button" (click)="updateState({ plum: 'orange' })"></button>
//   </div>`,
// })
// export class Apple implements OnInit {
//   state: any;

//   constructor(private stateService: StateService) {}

//   ngOnInit(): void {
//     this.stateService.currentState.subscribe((state) => (this.state = state));
//   }

//   updateState(newState: any) {
//     this.stateService.updateState(newState);
//   }
// }
