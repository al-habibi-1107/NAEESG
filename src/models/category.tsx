export enum ICategoryId {
    MCB = 1,
    RCCB = 2,
    ACCL = 3,
    ISOLATOR = 4,
    DB = 5,
    WIRES = 6
  }
  
  export const allCategories = [
    {id:ICategoryId.MCB,title:"Miniature Circuit Breaker (MCB)"},
    {id:ICategoryId.RCCB,title:"Residual Current Circuit Breaker (RCCB)"},
    {id:ICategoryId.ACCL,title:"Automatic Changeover and Current Limiter (ACCL)"},
    {id:ICategoryId.ISOLATOR,title:"Switch Disconnector"},
    {id:ICategoryId.DB,title:"Distribution Board"},
    {id:ICategoryId.WIRES,title:"Wires & Cables"}
  ]
  