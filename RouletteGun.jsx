import React from "react";
import PropTypes from 'prop-types';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            chamber: null,
            spinningTheChamber: 'false'
        };

        this.spinChamber = this.spinChamber.bind(this);
    }

    spinChamber() {
        this.setState({ spinningTheChamber: true });

        setTimeout(() => {
            const selectedChamber = Math.ceil(Math.random() * 8);

            this.setState({
                chamber: selectedChamber,
                spinningTheChamber: false
            });
        }, 2000)
    }

    render() {
        const { bulletInChamber } = this.props;
        const { chamber, spinningTheChamber } = this.state;

        const youDead = bulletInChamber === chamber;
        const youDeadText = youDead ? 'BANG!!!' : "you're safe!";

        const spinningChamberText = 'Spinning the chamber and pulling the trigger...!';

        return (
            <div>
                <p>
                    { !spinningTheChamber && youDeadText }
                    { spinningTheChamber && spinningChamberText }
                </p>
                <button onClick={this.spinChamber}>Pull the trigger!</button>
            </div>
        )
    }
}

RouletteGun.defaultProps = {
    bulletInChamber: 8
};

RouletteGun.propTypes = {
    bulletInChamber: PropTypes.number
};

export default RouletteGun;