import * as React from 'react';
import { Link } from 'react-router-dom'
import { IOracle } from '../../store/Store';
import { misc as MiscUtils } from "../../utils/";
import { Oracle } from '../';

interface IProps {
  oracles: IOracle[]
}

class OracleList extends React.Component<IProps> {
  public static defaultProps: Partial<IProps> = {
    oracles: []
  };

  renderListItem(item: string) {
    return (
      <li>Item {item}</li>
    );
  }

  public render() {
    return (
      <React.Fragment>
        {this.props.oracles.map((oracle) =>
          <Link to={'/oracles/' + MiscUtils.formatOracleTitleAsUrl(oracle.title)} className='App-link'>
            {MiscUtils.formatOracleTitle(oracle.title)}
          </Link>
        )}
      </React.Fragment>
    );
  }
}

export default OracleList;