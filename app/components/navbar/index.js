import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import seedomLogo from '../../../../seedom-assets/logo/full/seedom-full-white-transparent@4x.png';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavBar extends React.Component {
  static propTypes = {
    ethereum: PropTypes.shape().isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isBurgerActive: false
    };
  }

  handleNavToggle = () => {
    this.setState({
      isBurgerActive: !this.state.isBurgerActive
    });
  }

  handleNavLink = () => {
    this.setState({
      isBurgerActive: false
    });
  }

  render() {
    const { isBurgerActive } = this.state;
    const { isLoading } = this.props.ethereum;

    return (
      <nav className="navbar">
        <div className="container">
          <div className={classnames('navbar-brand', { 'is-loading': isLoading })}>
            <a className="navbar-item" href="/">
              <img src={seedomLogo} alt="Seedom - Seeding the future of philanthropy" />
            </a>
            <div className={classnames('navbar-burger', 'burger', { 'is-active': isBurgerActive })} onClick={this.handleNavToggle}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={classnames('navbar-menu', { 'is-active': isBurgerActive })}>
            <div className="navbar-start">
              <NavLink className="navbar-item" activeClassName="is-active" to={ETH_PATH} onClick={this.handleNavLink} exact>PARTICIPATE</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to={`${ETH_PATH}vote`} onClick={this.handleNavLink} exact>VOTE</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to={`${ETH_PATH}history`} onClick={this.handleNavLink} exact>HISTORY</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to={`${ETH_PATH}help`} onClick={this.handleNavLink} exact>HELP</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to={`${ETH_PATH}about`} onClick={this.handleNavLink} exact>ABOUT</NavLink>
            </div>
            <div className="navbar-end">
              <a className="navbar-item" href="https://medium.com/@seedom.io">
                <span className="icon">
                  <i className="fab fa-lg fa-medium" />
                </span>
              </a>
              <a className="navbar-item" href="https://reddit.com/r/seedom_io">
                <span className="icon">
                  <i className="fab fa-lg fa-reddit" />
                </span>
              </a>
              <a className="navbar-item" href="https://github.com/seedom-io">
                <span className="icon">
                  <i className="fab fa-lg fa-github" />
                </span>
              </a>
              <a className="navbar-item" href="https://www.facebook.com/seedom.io">
                <span className="icon">
                  <i className="fab fa-lg fa-facebook" />
                </span>
              </a>

              <a className="navbar-item" href="https://twitter.com/seedom_io">
                <span className="icon">
                  <i className="fab fa-lg fa-twitter" />
                </span>
              </a>

              <a className="navbar-item" href="https://www.instagram.com/seedom.io/">
                <span className="icon">
                  <i className="fab fa-lg fa-instagram" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    router: state.router,
    ethereum: state.ethereum
  };
};

export default connect(mapStateToProps)(NavBar);
