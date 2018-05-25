import { NgModule } from "@angular/core";

import { MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component'
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    ProfileComponent
  ],
  declarations: [
    ProfileComponent,
  ]
})
export class SharedModule {

}