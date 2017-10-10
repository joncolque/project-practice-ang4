import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ListadoComponent } from './listado/listado.component'

const appRoutes:Routes = [
    {path:'',component: HomeComponent},
    {path:'home',component: HomeComponent},
    {path:'listado',component: ListadoComponent},
    //{path:'listado/:unTipoListado',component: ListadoComponent},
    {path:'**',component: HomeComponent}
]

export const appRoutingProviders: any []=[]
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes)