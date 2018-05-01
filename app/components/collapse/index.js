import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.scss';

class Collapse extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    collapsed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    children: PropTypes.element
  };

  static defaultProps = {
    id: null,
    children: null
  };

  render() {
    const { id, title, collapsed, onToggle } = this.props;
    return (
      <div id={id} className={classnames('seedom-collapse', { collapsed })}>
        <div className="header" onClick={onToggle}>
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
