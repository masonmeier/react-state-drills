import React from "react";

class Bomb extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.clearTimerInterval = this.clearTimerInterval.bind(this);
    }

    clearTimerInterval() {
        clearInterval(this.interval)
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    componentWillUnmount() {
        this.clearTimerInterval();
    }

    render() {
        const { count } = this.state;
        const isDivisibleByTwo = count % 2 === 0;
        let timerText = isDivisibleByTwo ? 'tick' : 'tock';

        if (count >= 8) {
            timerText = 'BOOM!!!!';
            this.clearTimerInterval();
        }

        return (
            <div>
                <p>{count}</p>
                <p>{timerText}</p>
            </div>
        )
    }
}

export default Bomb;