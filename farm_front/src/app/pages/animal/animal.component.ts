import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { animalServices } from 'src/app/services/animalServices.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

export enum AnimalStatus {
  Healthy = 'Healthy',
  Sick = 'Sick',
  Deceased = 'Deceased',
}

export interface Animal {
  id: number;
  type: string;
  name: string;
  birthDate: Date;
  deathDate?: Date;
  status: AnimalStatus;
  pictureUrl: string;
  description?: string;
  farmId?: number;
}

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  page: number = 1;
  public allAnimals: any;

  constructor(
    private dialog: MatDialog,
    private animalServices: animalServices,
    ) {}

  async ngOnInit(): Promise<void> {
    this.allAnimals = await firstValueFrom(this.animalServices.getAllAnimals());
  }

  openAnimalModal(animal: Animal) {
    this.dialog.open(ModalComponent, {
      data: { animals: animal },
      hasBackdrop: true,
    });
  }
}
