import React, { Fragment } from 'react';
import { ShowcaseHome } from './style';
import Form from '../../../style/Form';
import Btn from '../../../style/Button';

const Showcase = () => {
	return (
		<Fragment>
			<ShowcaseHome>
				<div className='overlay'></div>
				<Form className='showcaseForm' placeholder='Search...' />
				<Btn className='showcaseBtn' showcase>
					Search
				</Btn>
			</ShowcaseHome>
		</Fragment>
	);
};

export default Showcase;
