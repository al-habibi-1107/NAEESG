
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
  {id:ICategoryId.RCCB,title:"Residual urrent Circuit Breaker (RCCB)"},
  {id:ICategoryId.ACCL,title:"Automatic Changeover and Current Limiter (ACCL)"},
  {id:ICategoryId.ISOLATOR,title:"Switch Diconnector"},
  {id:ICategoryId.DB,title:"Distribution Board"},
  {id:ICategoryId.WIRES,title:"Wires & Cables"}
]

export enum IBrandId {
  SIEMENS = 1,
  BONTON = 2,
}

export const allBrands = [
  { id: IBrandId.SIEMENS, name: "SIEMENS" },
  { id: IBrandId.BONTON, name: "BONTON" },
];

export class Product {
  id: number;
  name: string;
  categoryId: ICategoryId;
  brandId: IBrandId;
  price: number;
  description: string;
  image: string;
  referenceNumbers: string[]; // List of reference numbers
  variants: Variant[]; // List of product variants

  constructor(
    id: number,
    name: string,
    categoryId: ICategoryId,
    brandId: IBrandId,
    price: number,
    description: string,
    image: string,
    referenceNumbers: string[],
    variants: Variant[]
  ) {
    this.id = id;
    this.name = name;
    this.categoryId = categoryId;
    this.brandId = brandId;
    this.price = price;
    this.description = description;
    this.image = image;
    this.referenceNumbers = referenceNumbers;
    this.variants = variants;
  }

  // Get category name dynamically
  get category(): string {
    const category = Product.categoryMap[this.categoryId];
    return category || "Unknown";
  }

  // Get brand name dynamically
  get brand(): string {
    const brand = Product.brandMap[this.brandId];
    return brand || "Unknown";
  }

  // Static mapping of categoryId to category name
  static categoryMap: Record<number, string> = {
    [ICategoryId.MCB]: "Miniature Circuit Breaker (MCB)",
    [ICategoryId.RCCB]: "Residual Current Circuit Breaker (RCCB)",
    [ICategoryId.ACCL]: "Automatic Changeover and Current Limiter (ACCL)",
    [ICategoryId.ISOLATOR]: "Switch Disconnector",
    [ICategoryId.DB]: "Distribution Board",
    [ICategoryId.WIRES]: "Wires & Cables",
  };

  // Static mapping of brandId to brand name
  static brandMap: Record<number, string> = {
    [IBrandId.SIEMENS]: "SIEMENS",
    [IBrandId.BONTON]: "BONTON",
  };
}

// Variant Class to Hold Additional Attributes
export class Variant {
  poles: string; // e.g., "2P", "4P"
  residualCurrent: string; // e.g., "30mA", "100mA"
  ratedCurrent: string; // e.g., "25A", "40A"
  mw: number; // MW rating

  constructor(poles: string, residualCurrent: string, ratedCurrent: string, mw: number) {
    this.poles = poles;
    this.residualCurrent = residualCurrent;
    this.ratedCurrent = ratedCurrent;
    this.mw = mw;
  }
}

export const allProducts: Product[] = [
  new Product(
    1,
    "Residual Current Circuit Breaker",
    ICategoryId.RCCB,
    IBrandId.SIEMENS,
    45.5,
    "Residual Current Circuit Breaker with various ratings and poles",
    "/Products/RCCB/RCCB_2P.png",
    ["5SV53120RC", "5SV54120RC", "5SV56120RC"],
    [
      new Variant("2P", "30mA", "25A", 2),
      new Variant("2P", "100mA", "25A", 2),
      new Variant("2P", "300mA", "25A", 2),
    ]
  ),
  new Product(
    2,
    "Residual Current Circuit Breaker",
    ICategoryId.RCCB,
    IBrandId.SIEMENS,
    50.0,
    "Residual Current Circuit Breaker with various ratings and poles",
    "/Products/RCCB/RCCB_4P.png",
    ["5SV53140RC", "5SV54140RC", "5SV56140RC"],
    [
      new Variant("2P", "30mA", "40A", 2),
      new Variant("2P", "100mA", "40A", 2),
      new Variant("2P", "300mA", "40A", 2),
    ]
  ),
  new Product(
    3,
    "Residual Current Circuit Breaker",
    ICategoryId.RCCB,
    IBrandId.SIEMENS,
    55.0,
    "Residual Current Circuit Breaker with various ratings and poles",
    "/Products/RCCB/RCCB_4P.png",
    ["5SV53160RC", "5SV54160RC", "5SV56160RC"],
    [
      new Variant("2P", "30mA", "63A", 2),
      new Variant("2P", "100mA", "63A", 2),
      new Variant("2P", "300mA", "63A", 2),
    ]
  ),
  new Product(
    4,
    "Residual Current Circuit Breaker",
    ICategoryId.RCCB,
    IBrandId.SIEMENS,
    60.0,
    "Residual Current Circuit Breaker with various ratings and poles",
    "/Products/RCCB/RCCB_4P.png",
    ["5SV53420RC", "5SV54420RC", "5SV56420RC"],
    [
      new Variant("4P", "30mA", "25A", 4),
      new Variant("4P", "100mA", "25A", 4),
      new Variant("4P", "300mA", "25A", 4),
    ]
  ),
  new Product(
    5,
    "Residual Current Circuit Breaker",
    ICategoryId.RCCB,
    IBrandId.SIEMENS,
    65.0,
    "Residual Current Circuit Breaker with various ratings and poles",
    "/Products/RCCB/RCCB_4P.png",
    ["5SV53440RC", "5SV54440RC", "5SV56440RC"],
    [
      new Variant("4P", "30mA", "40A", 4),
      new Variant("4P", "100mA", "40A", 4),
      new Variant("4P", "300mA", "40A", 4),
    ]
  ),
];

// export const allProducts = [
//   new Product(
//     1,
//     "Miniature Circuit Breaker",
//     ICategoryId.MCB,
//     IBrandId.SIEMENS,
//     20.99,
//     "MCB 6000A 1P 240/415 V AC",
//     "/1PMCCB.png"
//   ),
//   new Product(
//     2,
//     "Miniature Circuit Breaker",
//     ICategoryId.MCB,
//     IBrandId.SIEMENS,
//     20.99,
//     "MCB 6000A 2P 415 V AC",
//     "/2PMCCB.png"
//   ),
//   new Product(
//     3,
//     "Miniature Circuit Breaker",
//     ICategoryId.MCB,
//     IBrandId.SIEMENS,
//     20.99,
//     "MCB 6000A 3P 415 V AC",
//     "/3PMCCB.png"
//   ),
//   new Product(
//     4,
//     "Residual Current Circuit Breaker",
//     ICategoryId.RCCB,
//     IBrandId.SIEMENS,
//     45.5,
//     "RCCB 30mA 25A 2P",
//     "/Products/RCCB/RCCB_2P.png"
//   ),
//   new Product(
//     5,
//     "Residual Current Circuit Breaker",
//     ICategoryId.RCCB,
//     IBrandId.SIEMENS,
//     45.5,
//     "RCCB 30mA 40A 2P",
//     "/Products/RCCB/RCCB_2P.png"
//   ),
//   new Product(
//     6,
//     "Residual Current Circuit Breaker",
//     ICategoryId.RCCB,
//     IBrandId.SIEMENS,
//     45.5,
//     "RCCB 30mA 40A 4P",
//     "/Products/RCCB/RCCB_4P.png"
//   ),
//   new Product(
//     7,
//     "Automatic Changeover and Current Limiter",
//     ICategoryId.ACCL,
//     IBrandId.SIEMENS,
//     45.5,
//     "ACCL 2A 4MW 5TR44650RC02",
//     "/ACCL.png"
//   ),

// ]


