import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindngComponent } from './databindng/databindng.component';
import { DirectiveComponent } from './directive/directive.component';
import { ToggleimgComponent } from './task/toggleimg/toggleimg.component';
import { MultipleimgComponent } from './task/multipleimg/multipleimg.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MypipesComponent } from './mypipes/mypipes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatabindngComponent,
    DirectiveComponent,ToggleimgComponent,MultipleimgComponent,ParentComponent,ChildComponent,MypipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularprj';
}
