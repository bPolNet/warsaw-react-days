import { action } from "mobx";

export default class NameCheckerModel {
  names = [
    'mama',
    'nanya'
  ];

  @action
  pickName(title) {
    return this.names.filter((name)=>{return title === name})
  }
}
