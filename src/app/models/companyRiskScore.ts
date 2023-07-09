
import { Dimensions } from "./dimensions";

export class CompanyRiskScore {
    companyName!:string;
    dimensions!: Dimensions[];

    constructor(companyName: string) {
        this.companyName = companyName;
        this.dimensions = [];
      }
    
      addDimensions(dimension: Dimensions) {
        this.dimensions.push(dimension);
      }

    
}