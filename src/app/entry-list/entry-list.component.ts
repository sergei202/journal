import { Component, OnInit } from '@angular/core';

import { EntryService, Entry } from '../entry.service';

@Component({
	selector: 'app-entry-list',
	templateUrl: './entry-list.component.html',
	styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
	entries = [];

	constructor(public entryService:EntryService) { }

	ngOnInit() {
		this.entries = this.entryService.getEntries();
	}

}
