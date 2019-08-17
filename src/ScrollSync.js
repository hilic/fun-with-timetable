import React from "react";
import PropTypes from "prop-types";

export default class ScrollSync extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired
  };

  state = {
    clientHeight: 0,
    clientWidth: 0,
    scrollHeight: 0,
    scrollLeft: this.props.scrollLeft || 0,
    scrollTop: this.props.scrollTop || 0,
    scrollWidth: 0
  };

  render() {
    const { children } = this.props;
    const {
      clientHeight,
      clientWidth,
      scrollHeight,
      scrollLeft,
      scrollTop,
      scrollWidth
    } = this.state;

    return children({
      clientHeight,
      clientWidth,
      onScroll: this._onScroll,
      scrollHeight,
      scrollLeft,
      scrollTop,
      scrollWidth
    });
  }

  _onScroll = evt => {
    const {
      clientHeight,
      clientWidth,
      scrollHeight,
      scrollLeft,
      scrollTop,
      scrollWidth
    } = evt.target;
    this.setState({
      clientHeight,
      clientWidth,
      scrollHeight,
      scrollLeft,
      scrollTop,
      scrollWidth
    });
  };
}
