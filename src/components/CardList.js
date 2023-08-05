/*Parent Component--> replace cardComponent*/
import React from 'react';
import Card from './Card';

const CardList = ({ familyList }) => {
	if (true) {
		throw new Error('NOOOOOOO!');
	}
	return (
		<div>
			{
				familyList.map((user, i)=> {
					return (
						<Card
							key={i}
							id={familyList[i].id}
							name={familyList[i].name}
							email={familyList[i].email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;
