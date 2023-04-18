import { Component, ElementRef, ViewChild } from '@angular/core';
import { ListService } from '../../services/list.service';


@Component ({
    selector: 'list-search-box',
    template:`
       <h5> Buscar: </h5>
       <input type="text"
          class="form-control"
          placeholder=" Agrega una tarea"
          (keyup.enter)="searchTag()"
          #txtTagInput
         >
    `
})

export class SearchBoxComponent {
    @ViewChild ('txtTagInput')
    public tagInput!: ElementRef<HTMLInputElement>;

    constructor( private listService: ListService) {}

searchTag () {
    const newTag = this.tagInput.nativeElement.value;
        this.listService.searchTag(newTag);
        this.tagInput.nativeElement.value= '';
}
}