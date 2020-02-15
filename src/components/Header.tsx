import * as React from 'react';

interface IProps {
  name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
  <div>
    <h1>Greetings, {props.name}!</h1>
    <h2>I am the Oracle.</h2>
  </div>
);

Header.defaultProps = {
  name: 'Ironsworn',
};

export default Header;