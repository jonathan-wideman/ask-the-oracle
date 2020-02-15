import oracles from "./data/OraclesIndex";


export interface IStore {
  oracles: IOracle[];
}

export interface IOracle {
  title: string;
  table: IRollTableLineItem[];
}

export interface IRollTableLineItem {
  roll: string,
  result: string
}

const Store: IStore = {
  oracles: oracles
}

export default Store;