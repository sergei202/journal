import { Injectable } from '@angular/core';

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
	entries:Entry[] = [];		// In-memory model

	constructor() {
		this.saveEntry({
			date: new Date(),
			name: 'First!'
		});
		this.saveEntry({
			date: new Date(),
			name: 'Second entry'
		});
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
	}
}
