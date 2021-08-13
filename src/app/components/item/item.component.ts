import { Component, OnInit } from '@angular/core';

import {EnvironmentService} from '@app/environment.service';
import {Item} from '@shared/models/item.model';
import {Subject} from 'rxjs';

import {ItemService} from '@shared/services/item/item.service';

import {Router} from '@angular/router';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items: Item[];
  sec: Item[];
  change = false;
  eMessage = '';
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private titleService: Title,
    private itemService: ItemService,
    private environment: EnvironmentService,
    private router: Router
  ) {
    titleService.setTitle('Registros - ' + environment.defaultTitle);
  }

  ngOnInit() {
    this.getItems();
  }

  recarregaTabela() {
    this.itemService.getItems().subscribe((data: any) => {
      this.items = data;
    }, (error: any) => {
      this.eMessage = 'Erro ao listar registros: ' + error;
      this.change = true;
    });
  }

  dispensar(){
    this.router.navigate(['/index']);
    this.eMessage = '';
    this.change = false;
  }

  getItems() {
    this.itemService.getItems().subscribe((data: any) => {
      this.items = data;
      console.log(data);
      this.dtTrigger.next();
    }, (error: any) => {
      this.eMessage = 'Erro ao listar registros: ' + error;
      this.change = true;
    });
  }
}