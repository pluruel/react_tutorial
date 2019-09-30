import React, { Component } from 'react';

class HistorySample extends Component {
  handleGoback = () => {
    this.props.history.goBack();
  };

  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    this.unblock = this.props.history.block('정말 떠나실 건가요?');
  }

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoback}>뒤로</button>
        <button onCLick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
