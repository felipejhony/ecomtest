import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Table } from 'primeng/table';

@Directive({
  selector: '[appExpandRows]'
})
export class ExpandRowsDirective implements OnChanges {
  @Input() appExpandRows: boolean = false;
  @Input() table!: Table;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appExpandRows']) {
      
      if (!this.appExpandRows) {

        this.table.expandedRowKeys = {};

      }
    }
  }
}
