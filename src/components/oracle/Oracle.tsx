import * as React from 'react';
import { useParams } from 'react-router-dom';
import { misc as MiscUtils } from "../../utils/";
import Store, { IOracle } from '../../store/Store';
import RollTableUtils from "./utils/roll-table";
import './Oracle.css';

// interface IProps {
//   oracle: IOracle
// }

// interface IState {
//   result?: string;
// }

const Oracle: React.FC = () => {
  const { id } = useParams();

  const findOracle = function (title: string | undefined): IOracle | undefined {
    if (title === undefined) {
      return undefined;
    }
    return Store.oracles.find((oracle) => MiscUtils.formatOracleTitleAsUrl(oracle.title) === title) ?? undefined;
  }

  return (
    <span>{MiscUtils.formatOracleTitle(findOracle(id)?.title ?? 'Unknown Oracle')}</span>
  );
};

// class Oracle extends React.Component<IProps, IState> {
//   public static defaultProps: Partial<IProps> = {
//     oracle: undefined
//   };

//   public state: IState = {
//     result: undefined
//   };

//   constructor(props: IProps) {
//     super(props);
//     // Don't call this.setState() here!
//     if (this.props.oracle !== undefined) {
//       this.state = { result: RollTableUtils.rollResult(this.props.oracle) };
//     }

//     this.roll = this.roll.bind(this);
//   }

//   public roll(): void {
//     if (this.props.oracle !== undefined) {
//       this.setState({ result: RollTableUtils.rollResult(this.props.oracle)})
//     }
//   }

//   public render() {
//     return (
//       <li className="Oracle" onClick={this.roll}>
//         {() => { if (this.props.oracle !== undefined) MiscUtils.formatOracleTitle(this.props.oracle.title) }}
//         {/* <ul>{this.props.oracle.table.map((item) => <li>{item.roll}: {item.result}</li>)}</ul> */}
//         : {this.state.result}
//       </li>
//     );
//   }
// }

export default Oracle;