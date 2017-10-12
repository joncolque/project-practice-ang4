import { Component } from "@angular/core"

@Component(
    {
        selector:'home',
        templateUrl:'./home.component.html',
        styleUrls:['../draws/draws.component.css']
    }
)

export class HomeComponent{
    titleHome = 'Bienvenido al Home'
    areas:Array<string>=['I+D','Desarrollo','RRHH']

    getProjects(){
        console.log("no hay proyectos")
    }
}