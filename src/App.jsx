import React, { useState } from 'react'
import classes from './App.module.css'

const faqs = [
	{
		title: 'What has keys but can\'t open locks?',
		text: 'A piano.'
	},
	{
		title: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. \nWhat am I?',
		text: 'An echo.'
	},
	{
		title: 'What has a head, a tail, is brown, and has no legs?',
		text: 'A penny (coin).'
	}
]

export default function App() {
	const [curOpen, setCurOpen] = useState(null)

	const handleOpen = (num) => {
		setCurOpen((prev) => (prev === num ? null : num))
	}

	return (
		<div className={classes.accordion}>
			{faqs.map((el, i) => (
				<React.Fragment key={el.title}>
					<div
						className={`${classes.item} ${i === curOpen ? classes.open : ''}`}
						onClick={() => handleOpen(i)}
					>
						<p className={classes.number}>
							{i < 9 ? `0${i + 1}` : i + 1}
						</p>
						<p className={classes.title}>{el.title}</p>
						<p className={classes.icon}>{i === curOpen ? '-' : '+'}</p>
						{i === curOpen && <p className={classes.contentBox}>{el.text}</p>}
					</div>
				</React.Fragment>
			))}
		</div>
	)
}
