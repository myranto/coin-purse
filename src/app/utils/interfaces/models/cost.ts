import {HasId} from "../hasId";
import {Type_cost} from "./type_cost";

export interface Cost extends HasId {
  description: string | undefined | null,
  tcost_id: number,
  person_id: number,
  value: number | 0,
  date_release: Date | undefined | null,
  cost: Type_cost|null
}
