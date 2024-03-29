import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { animalServices } from 'src/app/services/animalServices.service';
import { Animal } from '../animal/animal.component';
import { ModalUpdateComponent } from 'src/app/shared/modal-update/modal-update.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-animals',
  templateUrl: './update-animals.component.html',
  styleUrls: ['./update-animals.component.css']
})
export class UpdateAnimalsComponent implements OnInit {
  page: number = 1;
  selectedAnimals: any;

  constructor(
    private animalServices: animalServices,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  async changeAnimalType(type: string){ 
    this.selectedAnimals = await firstValueFrom(this.animalServices.getAnimalsByType(type));
  }

  openAnimalModal(animal: Animal) {
    this.dialog.open(ModalUpdateComponent, {
      data: { animals: animal },
      hasBackdrop: true,
    });
  }

}
