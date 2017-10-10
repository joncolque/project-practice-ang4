import { Injectable } from '@angular/core'
import { Template } from '../listado/template'

@Injectable()

export class TemplateService{
    public templates:Array<Template> = []
    
    addTemplate(nombre,contenido){
        this.templates.push(new Template(nombre,contenido))
        console.log("TemplateService_addTempĺate()")
    }

    deleteTemplate(index){
        this.templates.splice(index,1)
        console.log("Templateservice_deleteTemplate()")
    }

    getTemplates(){
        return this.templates
    }
}