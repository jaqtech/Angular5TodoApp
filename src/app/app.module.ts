
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from "@angular/forms";
import { LogService } from './log.service';
import { BooleanToYesOrNoPipe } from './pipe/booleanToYesOrNoPipe';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule.forRoot()],
  declarations: [TodoComponent, BooleanToYesOrNoPipe],
  providers:[LogService],
  bootstrap: [TodoComponent]
})
export class AppModule {
}