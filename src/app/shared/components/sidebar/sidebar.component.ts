import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  @ViewChild('buttonTag')
  public buttonTag!: ElementRef<HTMLButtonElement>
  constructor( private gifsService: GifsService) {

  }

  get tags() :string[] {
    return this.gifsService.tagsHistory;
  }

  public searchTag( tag: string ):void{
    this.gifsService.searchTag(tag);

  }


}
