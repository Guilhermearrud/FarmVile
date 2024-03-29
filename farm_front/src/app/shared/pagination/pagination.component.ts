import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() shouldCallOnPageChangesMethod: boolean | undefined;
  @Input() page: number = 1;
  @Input() totalItemCount: number = 0;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() itemsPerPageChange: EventEmitter<number> =
    new EventEmitter<number>();

  selectedItemsPerPage: number = 10;

  startIndex = 1;
  endIndex = 1;
  options = [
    { key: 10, value: 10 },
    { key: 20, value: 20 },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['page'] && this.shouldCallOnPageChangesMethod) {
      this.onPageChange(this.page);
    }
    if (changes['page'] && !this.shouldCallOnPageChangesMethod) {
      this.updateFirstPage(this.page);
    }
  }
  onPageChange(pageNo: number): void {
    this.startIndex = (pageNo - 1) * this.selectedItemsPerPage + 1;
    if (pageNo * this.selectedItemsPerPage < this.totalItemCount) {
      this.endIndex = pageNo * this.selectedItemsPerPage;
    } else {
      this.endIndex = this.totalItemCount;
    }
    this.pageChange.emit(pageNo);
  }

  updateFirstPage(pageNo: number): void {
    this.startIndex = (pageNo - 1) * this.selectedItemsPerPage + 1;
    if (pageNo * this.selectedItemsPerPage < this.totalItemCount) {
      this.endIndex = pageNo * this.selectedItemsPerPage;
    } else {
      this.endIndex = this.totalItemCount;
    }
  }

  onItemsPerPageChange(event: number): void {
    this.selectedItemsPerPage = event;
    this.page = 1;
    this.itemsPerPageChange.emit(event);
    this.onPageChange(this.page);
  }
}