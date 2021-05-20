import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { AddressbookhomeComponent } from './components/addressbookhome/addressbookhome.component';

const routes: Routes = [
  { path: "", component: AddressbookhomeComponent },
  { path: "app-addressbookhome", component: AddressbookhomeComponent },
  { path: "app-add-contact", component: AddContactComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
