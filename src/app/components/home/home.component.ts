import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { EntryContentComponent } from "../entry-content/entry-content.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, EntryContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
