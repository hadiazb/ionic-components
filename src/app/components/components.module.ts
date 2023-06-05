import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';
import { ActionSheetPageRoutingModule } from '../pages/action-sheet/action-sheet-routing.module';
import { AlertPageRoutingModule } from '../pages/alert/alert-routing.module';
import { InicioPageRoutingModule } from '../pages/inicio/inicio-routing.module';

@NgModule({
  declarations: [HeaderComponent, OptionsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ActionSheetPageRoutingModule,
    AlertPageRoutingModule,
    InicioPageRoutingModule,
  ],
  exports: [HeaderComponent, OptionsComponent],
})
export class ComponentsModule {}
