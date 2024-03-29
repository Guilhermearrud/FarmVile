import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { animalServices } from 'src/app/services/animalServices.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent implements OnInit {

  statusOptions: string[] = ['Healthy', 'Sick', 'Deceased'];
  selectedStatus: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { animals: any;},
    private animalServices: animalServices,
  ) { }

  ngOnInit(): void {
    console.log('data.anims', this.data.animals)
  }

  changeStatus(selectedStatus: string) {
  }

  async changeAnimalStatus() {
    if (this.data.animals.status == 'Deceased') {
      alert('This animal is deceased, you cannot change its status')
    } else if (this.data.animals.status == this.selectedStatus) {
      alert('This animal already has this status')
    } else {
      const result = await firstValueFrom(this.animalServices.updateAnimalStatus(this.data.animals._id, this.selectedStatus))
      alert(result.message)
      this.data.animals = await firstValueFrom(this.animalServices.getAnimalById(this.data.animals._id))
    }
  }
}
