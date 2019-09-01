import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


    // Store the key-value pair passed to this function
    setLocalValue(itemID, itemValue){
		localStorage.setItem(itemID, itemValue);
		console.log('LocalstorageSevice: Set ' + itemID + ' to ' + itemValue);
    }

    // Get the stored value for the key passed to this function
    getLocalValue(itemID){
    	var itemValue = localStorage.getItem(itemID);
		console.log('LocalstorageService: Retrieved ' + itemID + ': ' + itemValue);
		return itemValue;
    }

}

