import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

export interface Entry {
	id: number,
	date: Date,
	name: string,
	notes?: string
};


@Injectable({
	providedIn: 'root'
})
export class EntryService {
	entries:Entry[];

	constructor(private localStorage:LocalStorageService) {
		this.entries = this.localStorage.get('journalEntries');
		if(!this.entries) this.entries = [];
	}

	getEntries():Entry[] {
		return this.entries;
	}

	getEntry(id):Entry {				// id is the index
		return this.entries.find(e => e.id==id);
	}

	saveEntry(entry) {
		if(!entry.id) {
			entry.id = this.entries.length+1;
			this.entries.push(entry);
		}

		this.localStorage.set('journalEntries', this.entries);
	}
}
