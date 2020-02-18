import * as React from 'react';
import { Link } from 'react-router-dom'
import { IOracle } from '../../store/Store';
import { misc as MiscUtils } from "../../utils/";
import { Oracle } from '../';

interface IProps {
  countBy?: number;
  // oracles: string[];
  oracles: IOracle[]
}

interface IState {
  count: number;
  items: string[];
}

class OracleList extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    countBy: 1,
    oracles: []
  };

  public state: IState = {
    count: 0,
    items: [
      'A',
      'B',
      'C',
      'D',
      'E',
    ]
  };

  renderListItem(item: string) {
    return (
      <li>Item {item}</li>
    );
  }

  public render() {
    return (
      <ul>
        {this.props.oracles.map((oracle) =>
          <li>
            <Link to={'/oracles/' + MiscUtils.formatOracleTitleAsUrl(oracle.title)}>
              {MiscUtils.formatOracleTitle(oracle.title)}
            </Link>
          </li>)}
        {/* {this.props.oracles.map((oracle) => <Oracle oracle={oracle}></Oracle>)} */}
      </ul>
    );
  }
}

export default OracleList;