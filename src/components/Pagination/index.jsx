import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Pagination = ( { perPage, total, setPagination  } ) => {
	const pageNumbers = [];
	// console.log(perPage, total);
	for (let i = 1; i <= Math.ceil(total/perPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div className='pagination'>
			<button className='pagination__button'>Назад</button>
			<ul className='pagination__list'>
				{pageNumbers.map(number => (
					<li key={number} className='pagination__item'>
						<Link to={`?page=${number}`} className='pagination__link' onClick={()=>setPagination(number)}>
							{number}
						</Link>
					</li>
				))}
			</ul>
			<button className='pagination__button'>Вперед</button>
		</div>
	);
}

export default Pagination;
