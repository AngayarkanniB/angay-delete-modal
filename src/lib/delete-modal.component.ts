import { Component, Input } from '@angular/core';
import { DeleteModalService } from '../public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'angay-delete-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  @Input() heading = 'Delete?';
  @Input() message = 'Are you sure you want to delete this item?';
  @Input() confirmButtonText = 'Yes, Delete';
  @Input() cancelButtonText = 'Cancel';
  isVisible = false;

  constructor(public modalService: DeleteModalService) { }

  ngOnInit(): void {
    this.modalService.visible$.subscribe((visible) => {
      this.isVisible = visible;
    });
  }

  close() {
    this.modalService.close();
  }

  confirm() {
    this.modalService.confirm();
  }
}
