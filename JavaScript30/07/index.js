(function() {
	'use strict'

	const people = [{
		name: 'Wes',
		year: 1988
	}, {
		name: 'Kait',
		year: 1986
	}, {
		name: 'Irv',
		year: 1970
	}, {
		name: 'Lux',
		year: 2015
	}, ]


	const comments = [{
		text: 'Love this!',
		id: 523423
	}, {
		text: 'Super good',
		id: 823423
	}, {
		text: 'You are the best',
		id: 2039842
	}, {
		text: 'Ramen is my fav food ever',
		id: 123523
	}, {
		text: 'Nice Nice Nice!',
		id: 542328
	}]

	// 1.是否至少有一人年满19周岁？
	const isAdult = people.some(person => {
		console.log((new Date()).getFullYear() - person.year)
		return (new Date()).getFullYear() - person.year >= 19
	})

	console.log('是否至少有一人年满19周岁',isAdult)

	// 2.是否每一个人都年满19周岁？
	const allAdults = people.every(person => {
		console.log((new Date()).getFullYear() - person.year)
		return (new Date()).getFullYear() - person.year >= 19
	})

	console.log('是否每一个人都年满19周岁',allAdults)

	// 3.是否存在id=823423的评论？
	const comment = comments.find((comment) => {
		return comment.id === 823423
	})

	console.log('是否存在id=823423的评论',comment)

	// 4.找到id=823423的评论的序列号(下标)
	const index = comments.findIndex((comment) => {
		return comment.id === 823423
	})

	console.log('找到id=823423的评论的序列号(下标)',index)

	// 除id=823423的评论
	// comments.splice(index,1)

	



})();