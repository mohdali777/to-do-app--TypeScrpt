export class BaseTask{
    constructor(public id: number, public name: string, public completed: boolean = false) {}
    json(){
        return {id:this.id,name:this.name}
    }
}


export class Task extends BaseTask{
    constructor(public id: number, public name: string, public completed: boolean = false){
        super(id,name,completed)
    }
} 


export class UrgentTask extends BaseTask {
    constructor(id: number, name: string, public priority: string, completed: boolean = false) {
        super(id, name, completed);
    }
        json(){
            return {
                ...super.json(),
                priority: this.priority,
                type: "Urgent Task"
            };
        }
}
