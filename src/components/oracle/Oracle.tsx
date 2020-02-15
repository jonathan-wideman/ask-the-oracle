import * as React from 'react';
import { misc as MiscUtils } from "../../utils/index";
import { IOracle } from '../../store/Store';
import './Oracle.css';
import Dice from '../../modules/dice/dice';

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
    this.state = { result: this.getRollResult(this.getRoll()) };

    this.roll = this.roll.bind(this);
  }

  public roll(): void {
    this.setState({ result: this.getRollResult(this.getRoll())})
  }

  getRandomInt(min: number, max: number): number {
    // FIXME: not properly rounded
    return Math.round(Math.random() * (max - min) + min);
  }

  getRoll(): number {
    return Dice.roll(10);
  }

  getRollResult(roll: number): string {
    return this.props.oracle.table.find((item) => this.isRollInRange(roll.toString(), item.roll))?.result ?? 'NOPE';
  }

  isRollInRange(roll: string, range: string): boolean {
    return range.includes(roll);
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