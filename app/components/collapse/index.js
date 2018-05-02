import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const collapseClass = (heavy, collapsed) => {
  return classNames({
    'seedom-collapse': true,
    open: !collapsed,
    heavy
  });
};

class Collapse extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    heavy: PropTypes.bool,
    collapsed: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    children: PropTypes.element
  };

  static defaultProps = {
    id: null,
    heavy: false,
    children: null
  };

  render() {
    const {
      id,
      title,
      heavy,
      collapsed,
      onToggle
    } = this.props;

    return (
      <div id={id} className={collapseClass(heavy, collapsed)}>
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
