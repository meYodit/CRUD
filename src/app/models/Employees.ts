import{IEmployee} from "./IEmployee";

export class Employee{ 

    data!:IEmployee[];    
    

    constructor() {
          this.data=[];       
    }

    // findAll():IEmployee[]{
    //     return this.data;
    // }
    findOne(id:number):IEmployee|null{
        for(let i= 0; i<this.data.length; i++){
            if(this.data[i].id==id){
                return this.data[i];
            }
            
        }return null
    }

    delete(id:number):IEmployee |null{
        for(let i= 0; i<this.data.length; i++){
          if(this.data[i].id==id){
           this.data.splice(i,1)           
            }                       
        }       
        return null 
      
    }
    insert(item:IEmployee):IEmployee |null{        
        this.data.push({...item});        
        return null;
    }
    // update(item:IEmployee):IEmployee |null{
    //     for(let i=0; i<this.data.length; i++){
    //         if(this.data[i].id==item.id){
    //             this.data.splice(i,1,{...item})                
    //         }
    //     }
    //     return null;
    // }
    update(item:IEmployee):IEmployee |null{
        this.delete(item.id);
        this.insert({...item})
        return null;
    }

//     find(item:any){
//         let filters =Object.keys(item);
//         console.log(filters)
//         let results = this.data.filter((elem:any) =>{
//             let found:boolean = false;
//             for(let i=0;i<filters.length;i++){
//                 let key=filters[i];
//                 if(elem[key]==item[key]){
//                     found = true;
//                 }else{
//                     found = false;
//                     break;
//                 }
//             }
//             return found;
//           })
//     }


 }


// let employees:Employee = new Employee();
// console.log(employees.findAll());
//console.log(employees.findOne(1));
//console.log(employees.delete(1));
//console.log(employees.insert({id:4, firstName:"DDD", lastName:"ddd", salary:116000}));
//console.log(employees.update({id:2, firstName:"EEE", lastName:"eee", salary:6000}))