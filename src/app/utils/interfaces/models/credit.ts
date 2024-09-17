import {HasId} from "../hasId";
import {Type_credit} from "./type_credit";

export interface Credit extends HasId{
  description:string|undefined|null,
  tcredit_id: number,
  person_id:number,
  value:number|0,
  date_entry:Date|undefined|null,
  credit:Type_credit|null
}
