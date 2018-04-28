'use strict';

const {h, Component, Color} = require('ink');
const PropTypes = require('prop-types');

class UI extends Component {
	render({name}) {
		return (
			<Color green>
				I love {name}
			</Color>
		);
	}
}

UI.propTypes = {
	name: PropTypes.string
};

UI.defaultProps = {
	name: 'Ink'
};

module.exports = UI;
