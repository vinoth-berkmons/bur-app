import React, {Component} from 'react';
import AUX from '../../hoc/Au';

const layout =  (props) => (
	<AUX>
		<div> Tool bar, Sidedraer, Backdrop</div>
		<main> 
			{props.children} 
		</main>
	</AUX>
	);

export default layout;