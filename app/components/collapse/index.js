import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss';

class Collapse extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    collapsed: PropTypes.bool,
    children: PropTypes.element
  };

  static defaultProps = {
    id: null,
    collapsed: true,
    children: null
  };

  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.collapsed
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.state.collapsed !== newProps.collapsed) {
      this.setState({ collapsed: newProps.collapsed });
    }
  }

  toggle = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed
    }));
  };

  render() {
    const { id, title } = this.props;
    const { collapsed } = this.state;
    return (
      <div id={id} className={classnames('seedom-collapse', { collapsed })}>
        <div className="header" onClick={this.toggle}>
          <span className="toggle left">
            <i className="fas fa-plus" />
          </span>
          <span className="text">{title}</span>
          <span className="toggle right">
            <i className="fas fa-plus" />
          </span>
        </div>
        {!collapsed && (
          <div className="content">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default Collapse;
