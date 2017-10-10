import { Component } from '@angular/core'
import { AppComponent } from '../app.component'
import { Template } from './template'

@Component({
    selector:'listado',
    templateUrl:'./listado.component.html',
})

export class ListadoComponent{
    titleListado = 'Estas son las listas'
    listadoTemplates:Array<Template>
    nombre:string
    contenido:string
    constructor(
        private _component: AppComponent,     
    ){}

    addTemplate(){
        this._component.templateService.addTemplate(this.nombre,this.contenido)
        console.log("ListadoComponent_addTemplate()")
        console.log(this._component.templateService.getTemplates())
        //console.log(this.nombre)
        //console.log(this.contenido)
        //console.log(this.listadoTemplates)
    }

    deleteTemplate(index){
        this._component.templateService.deleteTemplate(index)
        console.log(this._component.templateService.getTemplates())
    }

    ngOnInit(){
        this.listadoTemplates = this._component.templateService.getTemplates()
        console.log(this._component.templateService.getTemplates())
        console.log("ListadoComponent_ngOnInit")
    }
/*
    ngOnDestroy(){
        console.log("ListadoComponent_ngOnDestroy")
    }

    ngOnChanges(){
        console.log("ListadoComponent_ngOnChanges")
    }

    ngDoCheck(){
        console.log("ListadoComponent_ngDoCheck")
    }

    ngAfterContentInit(){
        console.log("ListadoComponent_ngAfterContentInit")
    }
    ngAfterContentChecked(){
        console.log("ListadoComponent_ngAfterContentChecked")
    }
    ngAfterViewInit(){
        console.log("ListadoComponent_ ngAfterViewInit")
    }
    ngAfterViewChecked(){
        console.log("ListadoComponent_ngAfterViewChecked")
    }
*/
}
