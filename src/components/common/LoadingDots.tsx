import * as React from 'react';

interface Props {
  interval: number;
  dots: number;
}

class LoadingDots extends React.Component<Props,any> {

    interval = 200;
    dots = 10;

    constructor(props, context) {
    super(props, context);

    this.state = {frame: 1};
  }


  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        frame: this.state.frame + 1
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';
    while (dots > 0) {
      text += '.';
      dots--;
    }
    return <span {...this.props}>{text}&nbsp;</span>;
  }
}

export default LoadingDots;