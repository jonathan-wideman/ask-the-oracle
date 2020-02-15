import * as React from 'react';
import { misc as MiscUtils } from "../../utils/";
import { IOracle } from '../../store/Store';
import RollTableUtils from "./utils/roll-table";
import './Oracle.css';

interface IProps {
  oracle: IOracle
}

interface IState {
  result?: string;
}

class Oracle extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    oracle: undefined
  };

  public state: IState = {
    result: undefined
  };

  constructor(props: IProps) {
    super(props);
    // Don't call this.setState() here!
    this.state = { result: RollTableUtils.rollResult(this.props.oracle) };

    this.roll = this.roll.bind(this);
  }

  public roll(): void {
    this.setState({ result: RollTableUtils.rollResult(this.props.oracle)})
  }

  public render() {
    return (
      <li className="Oracle" onClick={this.roll}>
        {MiscUtils.formatOracleTitle(this.props.oracle.title)}
        {/* <ul>{this.props.oracle.table.map((item) => <li>{item.roll}: {item.result}</li>)}</ul> */}
        : {this.state.result}
      </li>
    );
  }
}

export default Oracle;