import { Injectable } from '@angular/core'

@Injectable()

export class TemplateService{
    public templates:Array<string> = []
    
    addTemplate(unTemplate){
        this.templates.push(unTemplate)
    }

    deleteTemplate(index){
        this.templates.splice(index,1)
    }

    getTemplates(){
        return this.templates
    }
}