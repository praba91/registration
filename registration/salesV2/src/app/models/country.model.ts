import {Deserializable} from "./deserializable.model";

export class Country implements Deserializable{
id:number;
name:string;
 deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
