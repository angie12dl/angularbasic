import { Component } from '@angular/core';

import { ListService } from '../../../list/services/list.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {
  _tags: string[]= [];

  constructor( private listService : ListService) { }
  get tags (){
    return this._tags = this.listService.tagsH;
  }

  eliminarTa(index: any) {
    this.listService.eliminarTag(index);

  }


}
