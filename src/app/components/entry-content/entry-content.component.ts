import { AfterViewInit, Component } from '@angular/core';
import { runGsapAnimations } from './animations';

@Component({
  selector: 'app-entry-content',
  imports: [],
  templateUrl: './entry-content.component.html',
  styleUrls: ['./entry-content.component.css']
})
export class EntryContentComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    runGsapAnimations();
  }
}
