import { Company } from "./company";

export interface WorkState {
  selected?: Company;
  companies: Company[];
}
