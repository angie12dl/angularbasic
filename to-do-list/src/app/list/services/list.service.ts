import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'}) 
export class ListService {
    private _tagsH: string [] = []; 

    get tagsH (){
        return [...this._tagsH];
    }


    searchTag( tag: string): void{
        if( tag.length === 0) return;
        this._tagsH.unshift(tag); 
        console.log(this._tagsH);
    }
}