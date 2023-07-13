import {Type, Transform, Expose} from "class-transformer";

export class Bodegas{
    @Expose ({name: "id"})
    @Transform(({value})=>{

        let data = /^[0-9]+$/g.test(value);
        if(data && typeof value == "number"){            
            return Number(value);
        }
        else{
            throw {status: 401, message: "Error en el id: " + value};
        }
    })
    ID:number

    @Expose ({name: "nombre"})
    NOMBRE:string

    @Expose ({name: "id_responsable"})
    ID_RESPONSABLE:number

    @Expose ({name: "estado"})
    ESTADO:boolean

    @Expose ({name: "created_by"})
    CREATED_BY:string

    @Expose ({name: "update_by"})
    UPDATED_BY:string

    @Expose ({name: "created_at"})
    CREATED_AT:string

    @Expose ({name: "updated_at"})
    UPDATE_AT:string

    @Expose ({name: "deleted_at"})
    DELETED_AT:string

    
    
    constructor(p1:number ,p2:string, p3:number, p4:boolean,p5:string,p6:string,p7:string,p8:string,p9:string){

        this.ID=p1;
        this.NOMBRE=p2;
        this.ID_RESPONSABLE=p3;
        this.ESTADO=p4;
        this.CREATED_BY=p5;
        this.UPDATED_BY=p6;
        this.CREATED_AT=p7;
        this.UPDATE_AT=p8;
        this.DELETED_AT=p9;

    }
}