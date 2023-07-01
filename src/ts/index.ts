export interface countines {
    status:"loading" | "done"
    data: any
    todos:any
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