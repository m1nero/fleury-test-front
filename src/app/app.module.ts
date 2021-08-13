import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoaderModule } from '@shared/components/loader/loader.module';
import { DataTablesModule } from 'angular-datatables';
import { ItemService } from '@shared/services/item/item.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageDatatable } from '@shared/languages/language-datatable';
import { ChartsModule } from 'ng2-charts';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';

registerLocaleData(localePt);

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule,
    LoaderModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ChartsModule,
  ],
  providers: [
    Title,
    ItemService,
    LanguageDatatable,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }