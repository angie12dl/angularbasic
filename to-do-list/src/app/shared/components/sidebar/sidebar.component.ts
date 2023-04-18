import { Component } from '@angular/core';

import { ListService } from '../../../list/services/list.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent {

  constructor( private listService : ListService) { }
  get tags (){
    return this.listService.tagsH;
  }

}
