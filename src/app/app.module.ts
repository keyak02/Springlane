import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrocerylistComponent } from './grocerylist/grocerylist.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Todoservice } from 'src/app/service/todos.service.ts';
import { Groceryservice } from 'src/app/service/grocerylist.service.ts';

@NgModule({
  declarations: [
    AppComponent,
    GrocerylistComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    Todoservice,
    Groceryservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
