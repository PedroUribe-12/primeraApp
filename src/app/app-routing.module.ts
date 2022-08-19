import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'autor',
    loadChildren: () => import('./paginas/autor/autor.module').then( m => m.AutorPageModule)
  },
  {
    path: 'i-biblioteca',
    loadChildren: () => import('./paginas/i-biblioteca/i-biblioteca.module').then( m => m.IBibliotecaPageModule)
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./paginas/curriculum/curriculum.module').then( m => m.CurriculumPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
