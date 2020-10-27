import React, { Fragment } from 'react';
import { ShowcaseHome } from './style';
import Form from '../../../style/Form';
import Btn from '../../../style/Button';

function Showcase() {
	return (
		<Fragment>
			<ShowcaseHome>
				<div className='overlay'></div>
				<Form placeholder='Search...' />
				<Btn showcase>Search</Btn>
			</ShowcaseHome>
		</Fragment>
	);
}

export default Showcase;
