import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura as rotas raiz da aplicação
  exports: [RouterModule] // Exporta o módulo de roteamento
})
export class AppRoutingModule { }


