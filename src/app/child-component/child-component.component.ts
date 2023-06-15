import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent {
  @Input() testButton: any;
  constructor() { 
  }
  ngOnChanges(sc: SimpleChanges) {
    console.log('sschangeeeee', [sc]);
   };
}
