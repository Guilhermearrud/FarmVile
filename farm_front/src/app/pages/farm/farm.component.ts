import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Animal } from '../animal/animal.component';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { farmServices } from 'src/app/services/farmServices.service';
import { firstValueFrom } from 'rxjs';

interface Farm {
  id: number;
  name: string;
  location?: string;
  constructionDate: Date;
  history: string;
  pictureUrl?: string;
  animals?: Animal[];
}

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.css']
})
export class FarmComponent implements OnInit {
  page: number = 1;
  public allFarms: any;

  constructor(
    private dialog: MatDialog,
    private farmServices: farmServices,
    ) { }

  async ngOnInit(): Promise<void> {
    this.allFarms = await firstValueFrom(this.farmServices.getAllFarms());
  }

  openAnimalModal(farm: Farm) {
    this.dialog.open(ModalComponent, {
      data: { farms: farm },
      hasBackdrop: true,
    });
  }

}
