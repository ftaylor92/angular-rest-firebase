import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AddBookComponent} from "./book/add-book/add-book.component";

const routes: Routes = [
  {path: 'list-books', redirectTo: '/', pathMatch: 'full'},
  {path: 'add-book', component: AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
