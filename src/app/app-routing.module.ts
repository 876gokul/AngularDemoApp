import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CardLayoutComponent,
  },
  {
    path: 'grid',
    component: GridLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
