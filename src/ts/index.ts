export interface Todos {
  userId:number,
  id:number,
  title:string,
  completed:boolean

}
export interface Countines {
    status:"loading" | "done"
    data: Country[],
    todos:Todos[]
  }
  export interface Country {
    name: {
      common: string;
    };
    flags: {
      png: string;
      alt: string;
    };
  }