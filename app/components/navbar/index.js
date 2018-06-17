import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import seedomLogo from '../../../../seedom-assets/logo/full/seedom-full-white-transparent.png';

class NavBar extends React.Component {
  static propTypes = {
    ethereum: PropTypes.shape(),
    router: PropTypes.shape().isRequired
  };

  static defaultProps = {
    ethereum: null,
    causes: null,
    ticker: null
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

  // <NavLink className="navbar-item" activeClassName="is-active" to="/history" onClick={this.handleNavLink} exact>HISTORY</NavLink>
  render() {
    const { ethereum } = this.props;
    if (!ethereum) {
      return null;
    }

    const { isLoading } = ethereum;
    const { isBurgerActive } = this.state;

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
              <NavLink className="navbar-item" activeClassName="is-active" to="/" onClick={this.handleNavLink} exact>PARTICIPATE</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/vote" onClick={this.handleNavLink} exact>VOTE</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/history" onClick={this.handleNavLink} exact>HISTORY</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/help" onClick={this.handleNavLink} exact>HELP</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/about" onClick={this.handleNavLink} exact>ABOUT</NavLink>
              <NavLink className="navbar-item" activeClassName="is-active" to="/contact" onClick={this.handleNavLink} exact>CONTACT</NavLink>
            </div>
            <div className="navbar-end">
              <a className="navbar-item" href="https://t.me/seedomio">
                <span className="icon">
                  <i className="fab fa-lg fa-telegram" />
                </span>
              </a>
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
