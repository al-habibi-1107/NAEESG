import { ICategoryId } from "./category";
import { IBrandId } from "./brand";



export class Product {
  id: number;
  name: string;
  categoryId: ICategoryId;
  brandId: IBrandId;
  price: number;
  description: string;
  image: string;
  referenceNumbers: string[]; // List of reference numbers
  variants: Variant[]; 
  keywords: string[];// List of product variants

  constructor(
    id: number,
    name: string,
    categoryId: ICategoryId,
    brandId: IBrandId,
    price: number,
    description: string,
    image: string,
    referenceNumbers: string[],
    variants: Variant[],
    keywords: string[]=[]
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
    this.keywords = keywords
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
  image? : string // variant image

  constructor(poles: string, residualCurrent: string, ratedCurrent: string, mw: number,image?:string) {
    this.poles = poles;
    this.residualCurrent = residualCurrent;
    this.ratedCurrent = ratedCurrent;
    this.mw = mw;
    this.image = image;
  }
}

export const allProducts: Product[] = [
  new Product(
    1,
    "Residual Current Circuit Breaker 2P",
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
    ],
    ["RCCB", "Residual Current", "Circuit Breaker", "Earth Leakage", "2P", "Current Breaker"]
  ),
  new Product(
    2,
    "Residual Current Circuit Breaker 2P",
    ICategoryId.RCCB,
    IBrandId.SIEMENS,
    50.0,
    "Residual Current Circuit Breaker with various ratings and poles",
    "/Products/RCCB/RCCB_2P.png",
    ["5SV53140RC", "5SV54140RC", "5SV56140RC"],
    [
      new Variant("2P", "30mA", "40A", 2),
      new Variant("2P", "100mA", "40A", 2),
      new Variant("2P", "300mA", "40A", 2),
    ],
    ["RCCB", "Residual Current", "Circuit Breaker", "Earth Leakage", "2P", "Current Breaker"]
  ),
  new Product(
    3,
    "Residual Current Circuit Breaker 2P",
    ICategoryId.RCCB,
    IBrandId.SIEMENS,
    55.0,
    "Residual Current Circuit Breaker with various ratings and poles",
    "/Products/RCCB/RCCB_2P.png",
    ["5SV53160RC", "5SV54160RC", "5SV56160RC"],
    [
      new Variant("2P", "30mA", "63A", 2),
      new Variant("2P", "100mA", "63A", 2),
      new Variant("2P", "300mA", "63A", 2),
    ]
    ,
    ["RCCB", "Residual Current", "Circuit Breaker", "Earth Leakage", "2P", "Current Breaker"]
  ),
  new Product(
    4,
    "Residual Current Circuit Breaker 4P",
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
    ],
    ["RCCB", "Residual Current", "Circuit Breaker", "Earth Leakage", "4P", "Current Breaker"]
  ),
  new Product(
    5,
    "Residual Current Circuit Breaker 4P",
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
    ,
    ["RCCB", "Residual Current", "Circuit Breaker", "Earth Leakage", "4P", "Current Breaker"]
  ),
  new Product(
    6,
    "Residual Current Circuit Breaker 4P",
    ICategoryId.RCCB,
    IBrandId.SIEMENS,
    65.0,
    "Residual Current Circuit Breaker with various ratings and poles",
    "/Products/RCCB/RCCB_4P.png",
    ["5SV53460RC", "5SV54460RC", "5SV56460RC"],
    [
      new Variant("4P", "30mA", "63A", 4),
      new Variant("4P", "100mA", "63A", 4),
      new Variant("4P", "300mA", "63A", 4),
    ],
    ["RCCB", "Residual Current", "Circuit Breaker", "Earth Leakage", "4P", "Current Breaker"]
  ),
  new Product(
    7,
    "Miniature Circuit Breaker (1P, 240/415V AC)",
    ICategoryId.MCB,
    IBrandId.SIEMENS,
    500, // Placeholder base price
    "1-Pole Miniature Circuit Breaker with various current ratings.",
    "/Products/MCB/MCB_1P.png", // Image for 1P
    ["5SJ6106-6RC", "5SJ6110-6RC", "5SJ6116-6RC"], // Reference numbers for 1P
    [
      new Variant("1P", "Characteristic B: 5SJ6106-6RC, Characteristic C: 5SJ6106-7RC", "6A", 1),
      new Variant("1P", "Characteristic B: 5SJ6110-6RC, Characteristic C: 5SJ6110-7RC", "10A", 1),
      new Variant("1P", "Characteristic B: 5SJ6116-6RC, Characteristic C: 5SJ6116-7RC", "16A", 1),
      new Variant("1P", "Characteristic B: 5SJ6125-6RC, Characteristic C: 5SJ6125-7RC", "25A", 1)
    ],
    ["MCB", "Miniature Circuit", "Circuit Breaker", "1P", "Overload Protection"]
  ),
  
  // 2P Product
  new Product(
    8,
    "Miniature Circuit Breaker (2P, 415V AC)",
    ICategoryId.MCB,
    IBrandId.SIEMENS,
    800, // Placeholder base price
    "2-Pole Miniature Circuit Breaker with various current ratings.",
    "/Products/MCB/MCB_2P.png", // Image for 2P
    ["5SJ6206-7RC", "5SJ6210-7RC", "5SJ6220-7RC"], // Reference numbers for 2P
    [
      new Variant("2P", "Characteristic B: 5SJ6206-7RC, Characteristic C: 5SJ6206-7RC", "6A", 2),
      new Variant("2P", "Characteristic B: 5SJ6210-7RC, Characteristic C: 5SJ6210-7RC", "10A", 2),
      new Variant("2P", "Characteristic B: 5SJ6220-7RC, Characteristic C: 5SJ6220-7RC", "20A", 2),
      new Variant("2P", "Characteristic B: 5SJ6240-7RC, Characteristic C: 5SJ6240-7RC", "40A", 2)
    ]
    , ["MCB", "Miniature Circuit", "Circuit Breaker", "2P", "Overload Protection"]
  ),
  
  // 3P Product
  new Product(
    9,
    "Miniature Circuit Breaker (3P, 415V AC)",
    ICategoryId.MCB,
    IBrandId.SIEMENS,
    1200, // Placeholder base price
    "3-Pole Miniature Circuit Breaker with various current ratings.",
    "/Products/MCB/MCB_3P.png", // Image for 3P
    ["5SJ6306-7RC", "5SJ6310-7RC", "5SJ6320-7RC"], // Reference numbers for 3P
    [
      new Variant("3P", "Characteristic B: 5SJ6306-7RC, Characteristic C: 5SJ6306-7RC", "6A", 3),
      new Variant("3P", "Characteristic B: 5SJ6310-7RC, Characteristic C: 5SJ6310-7RC", "10A", 3),
      new Variant("3P", "Characteristic B: 5SJ6320-7RC, Characteristic C: 5SJ6320-7RC", "20A", 3),
      new Variant("3P", "Characteristic B: 5SJ6340-7RC, Characteristic C: 5SJ6340-7RC", "40A", 3)
    ],
    ["MCB", "Miniature Circuit", "Circuit Breaker", "3P", "Overload Protection"]
  ),
  
  // 4P Product
  new Product(
    10,
    "Miniature Circuit Breaker (4P, 415V AC)",
    ICategoryId.MCB,
    IBrandId.SIEMENS,
    1500, // Placeholder base price
    "4-Pole Miniature Circuit Breaker with various current ratings.",
    "/Products/MCB/MCB_4P.png", // Image for 4P
    ["5SJ6406-7RC", "5SJ6410-7RC", "5SJ6420-7RC"], // Reference numbers for 4P
    [
      new Variant("4P", "Characteristic B: 5SJ6406-7RC, Characteristic C: 5SJ6406-7RC", "6A", 4),
      new Variant("4P", "Characteristic B: 5SJ6410-7RC, Characteristic C: 5SJ6410-7RC", "10A", 4),
      new Variant("4P", "Characteristic B: 5SJ6420-7RC, Characteristic C: 5SJ6420-7RC", "20A", 4),
      new Variant("4P", "Characteristic B: 5SJ6440-7RC, Characteristic C: 5SJ6440-7RC", "40A", 4)
    ],
    ["MCB", "Miniature Circuit", "Circuit Breaker", "4P", "Overload Protection"]
  ),
  new Product(
    11,
    "Automatic Changeover and Current Limiter (ACCL) 5TR4",
    ICategoryId.ACCL,
    IBrandId.SIEMENS,
    1500, // Placeholder base price
    "Automatic Changeover and Current Limiter available with various current ratings.",
    "/Products/ACCL/ACCL.png", // Image for ACCL
    [
      "5TR44650RC02", "5TR44650RC03", "5TR44650RC04",
      "5TR44650RC05", "5TR44650RC06", "5TR44650RC08",
      "5TR44650RC10", "5TR44650RC15", "5TR44650RC20",
      "5TR44650RC25", "5TR44650RC30"
    ], // Reference numbers
    [
      new Variant("1P", "Reference No: 5TR44650RC02", "2A", 4),
      new Variant("1P", "Reference No: 5TR44650RC03", "2.5A", 4),
      new Variant("1P", "Reference No: 5TR44650RC04", "4A", 4),
      new Variant("1P", "Reference No: 5TR44650RC05", "5A", 4),
      new Variant("1P", "Reference No: 5TR44650RC06", "6A", 4),
      new Variant("1P", "Reference No: 5TR44650RC08", "8A", 4),
      new Variant("1P", "Reference No: 5TR44650RC10", "10A", 4),
      new Variant("1P", "Reference No: 5TR44650RC15", "15A", 4),
      new Variant("1P", "Reference No: 5TR44650RC20", "20A", 4),
      new Variant("1P", "Reference No: 5TR44650RC25", "25A", 4),
      new Variant("1P", "Reference No: 5TR44650RC30", "30A", 4)
    ],
    ["ACCL", "Automatic Changeover", "Current Limiter", "High Load"]
  ),
  new Product(
    12,
    "SPN Metal Single Door, IP30",
    ICategoryId.DB, // Category ID for Distribution Boards
    IBrandId.SIEMENS, // Brand ID for SIEMENS
    800, // Placeholder base price
    "SPN Metal Single Door Distribution Board with various module configurations.",
    "/Products/DB/DB_1.png", // Product image path
    ["8GB30101RC04", "8GB30101RC08", "8GB30101RC12", "8GB30101RC16", "8GB30101RC20"], // Reference numbers
    [
      new Variant("N/A", "N/A", "4A", 4, ""),
      new Variant("N/A", "N/A", "8A", 8, ""),
      new Variant("N/A", "N/A", "12A", 12, ""),
      new Variant("N/A", "N/A", "16A", 16, ""),
      new Variant("N/A", "N/A", "20A", 20, ""),
    ],
    ["DB", "Distribution Board", "12-Way Panel", "Circuit Board"]
  ),
  new Product(
    13,
    "SPN Metal Double Door, IP43",
    ICategoryId.DB, // Category ID for Distribution Boards
    IBrandId.SIEMENS, // Brand ID for SIEMENS
    1000, // Placeholder base price
    "SPN Metal Double Door Distribution Board with various module configurations.",
    "/Products/DB/DB_2.png", // Product image path
    ["8GB30102RC04", "8GB30102RC08", "8GB30102RC12", "8GB30102RC16", "8GB30102RC20"], // Reference numbers
    [
      new Variant("N/A", "N/A", "4A", 4, ""),
      new Variant("N/A", "N/A", "8A", 8, ""),
      new Variant("N/A", "N/A", "12A", 12, ""),
      new Variant("N/A", "N/A", "16A", 16, ""),
      new Variant("N/A", "N/A", "20A", 20, ""),
    ],
    ["DB", "Distribution Board", "12-Way Panel", "Circuit Board"]
  ),
  new Product(
    14,
    "TPN Metal Single Door, IP30",
    ICategoryId.DB, // Category ID for Distribution Boards
    IBrandId.SIEMENS, // Brand ID for SIEMENS
    1200, // Placeholder base price
    "TPN Metal Single Door Distribution Board with various way configurations.",
    "/Products/DB/DB_1.png", // Product image path
    ["8GB30201RC04", "8GB30201RC06", "8GB30201RC08", "8GB30201RC12"], // Reference numbers
    [
      new Variant("N/A", "N/A", "4A", 4, ""),
      new Variant("N/A", "N/A", "6A", 6, ""),
      new Variant("N/A", "N/A", "8A", 8, ""),
      new Variant("N/A", "N/A", "12A", 12, ""),
    ],
    ["DB", "Distribution Board", "12-Way Panel", "Circuit Board"]
  ),
  new Product(
    15,
    "TPN Metal Double Door, IP43",
    ICategoryId.DB, // Category ID for Distribution Boards
    IBrandId.SIEMENS, // Brand ID for SIEMENS
    1400, // Placeholder base price
    "TPN Metal Double Door Distribution Board with various way configurations.",
    "/Products/DB/DB_2.png", // Product image path
    ["8GB30202RC04", "8GB30202RC06", "8GB30202RC08", "8GB30202RC12"], // Reference numbers
    [
      new Variant("N/A", "N/A", "4A", 4, ""),
      new Variant("N/A", "N/A", "6A", 6, ""),
      new Variant("N/A", "N/A", "8A", 8, ""),
      new Variant("N/A", "N/A", "12A", 12, ""),
    ],
    ["DB", "Distribution Board", "12-Way Panel", "Circuit Board"]
  ),
  new Product(
    16,
    "Switch Disconnector 1P, 240V AC",
    ICategoryId.ISOLATOR, // Category ID for Switch Disconnectors
    IBrandId.SIEMENS, // Brand ID for SIEMENS
    500, // Placeholder price
    "1-Pole Switch Disconnector for 240V AC with various current ratings.",
    "/Products/ISOLATOR/SD_1P.png", // Product image path
    ["5TE3125-0RC", "5TE3140-0RC", "5TE3163-0RC", "5TE3180-0RC", "5TE3191-0RC", "5TE3192-0RC"], // Reference numbers
    [
      new Variant("1P", "N/A", "25A", 1, ""),
      new Variant("1P", "N/A", "40A", 1, ""),
      new Variant("1P", "N/A", "63A", 1, ""),
      new Variant("1P", "N/A", "80A", 1, ""),
      new Variant("1P", "N/A", "100A", 1, ""),
      new Variant("1P", "N/A", "125A", 1, ""),
    ],
    ["Switch Disconnector", "Isolator", "Load Break Switch", "Industrial Use"]
  ),
  new Product(
    17,
    "Switch Disconnector 2P, 415V AC",
    ICategoryId.ISOLATOR, // Category ID for Switch Disconnectors
    IBrandId.SIEMENS, // Brand ID for SIEMENS
    800, // Placeholder price
    "2-Pole Switch Disconnector for 415V AC with various current ratings.",
    "/Products/ISOLATOR/SD_2P.png", // Product image path
    ["5TE3225-0RC", "5TE3240-0RC", "5TE3263-0RC", "5TE3280-0RC", "5TE3291-0RC", "5TE3292-0RC"], // Reference numbers
    [
      new Variant("2P", "N/A", "25A", 2, ""),
      new Variant("2P", "N/A", "40A", 2, ""),
      new Variant("2P", "N/A", "63A", 2, ""),
      new Variant("2P", "N/A", "80A", 2, ""),
      new Variant("2P", "N/A", "100A", 2, ""),
      new Variant("2P", "N/A", "125A", 2, ""),
    ],
    ["Switch Disconnector", "Isolator", "Load Break Switch", "Industrial Use"]
  ),
  new Product(
    18,
    "Switch Disconnector 3P, 415V AC",
    ICategoryId.ISOLATOR, // Category ID for Switch Disconnectors
    IBrandId.SIEMENS, // Brand ID for SIEMENS
    1000, // Placeholder price
    "3-Pole Switch Disconnector for 415V AC with various current ratings.",
    "/Products/ISOLATOR/SD_2P.png", // Product image path
    ["5TE3325-0RC", "5TE3340-0RC", "5TE3363-0RC", "5TE3380-0RC", "5TE3391-0RC", "5TE3392-0RC"], // Reference numbers
    [
      new Variant("3P", "N/A", "25A", 3, ""),
      new Variant("3P", "N/A", "40A", 3, ""),
      new Variant("3P", "N/A", "63A", 3, ""),
      new Variant("3P", "N/A", "80A", 3, ""),
      new Variant("3P", "N/A", "100A", 3, ""),
      new Variant("3P", "N/A", "125A", 3, ""),
    ],
    ["Switch Disconnector", "Isolator", "Load Break Switch", "Industrial Use"]
  ),
  new Product(
    19,
    "Switch Disconnector 4P, 415V AC",
    ICategoryId.ISOLATOR, // Category ID for Switch Disconnectors
    IBrandId.SIEMENS, // Brand ID for SIEMENS
    1200, // Placeholder price
    "4-Pole Switch Disconnector for 415V AC with various current ratings.",
    "/Products/ISOLATOR/SD_2P.png", // Product image path
    ["5TE3425-0RC", "5TE3440-0RC", "5TE3463-0RC", "5TE3480-0RC", "5TE3491-0RC", "5TE3492-0RC"], // Reference numbers
    [
      new Variant("4P", "N/A", "25A", 4, ""),
      new Variant("4P", "N/A", "40A", 4, ""),
      new Variant("4P", "N/A", "63A", 4, ""),
      new Variant("4P", "N/A", "80A", 4, ""),
      new Variant("4P", "N/A", "100A", 4, ""),
      new Variant("4P", "N/A", "125A", 4, ""),
    ],
    ["Switch Disconnector", "Isolator", "Load Break Switch", "Industrial Use"]
  ),

];




