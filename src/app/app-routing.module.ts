import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryListComponent } from './entry-list/entry-list.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';

const routes: Routes = [

	{path:'entries', 		component:EntryListComponent},
	{path:'entries/:id',	component:EntryDetailComponent},
	{path:'',  redirectTo:'/entries', pathMatch:'full'},
	{path:'**', 			component:EntryListComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
