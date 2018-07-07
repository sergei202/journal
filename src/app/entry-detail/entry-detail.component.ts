import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EntryService, Entry } from '../entry.service';

@Component({
	selector: 'app-entry-detail',
	templateUrl: './entry-detail.component.html',
	styleUrls: ['./entry-detail.component.scss']
})
export class EntryDetailComponent implements OnInit {
	entry:Entry;

	constructor(private route:ActivatedRoute, private entryService:EntryService, private router:Router) {
		var id = this.route.snapshot.params.id;
		console.log('EntryDetailComponent\t id=%o', id);
		if(id==='new') {
			this.entry = <Entry>{
				date: new Date()
			};
		} else {
			this.entry = this.entryService.getEntry(id);
			console.log('entry: %o', this.entry);
		}
	}

	ngOnInit() {
	}

	save() {
		this.entryService.saveEntry(this.entry);
		this.router.navigate(['/entries']);
	}
}
