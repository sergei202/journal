import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

	constructor() { }

	get(key) {
		var value = window.localStorage.getItem(key);
		if(!value) return null;
		return this.jsonToObject(value);
	}

	set(key,value) {
		value = this.objectToJson(value);
		window.localStorage.setItem(key,value);
	}

	objectToJson(obj) {
		return JSON.stringify(obj);
	}

	jsonToObject(json) {
		return JSON.parse(json);
	}

}
