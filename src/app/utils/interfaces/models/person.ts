import {HasId} from "../hasId";

export interface Person extends HasId{
  name:string,
  mail:string,
  password:string,
}
