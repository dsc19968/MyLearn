(function() {
	'use strict'

	const inventors = [{
		first: 'Albert',
		last: 'Einstein',
		year: 1879,
		passed: 1955
	}, {
		first: 'Isaac',
		last: 'Newton',
		year: 1643,
		passed: 1727
	}, {
		first: 'Galileo',
		last: 'Galilei',
		year: 1564,
		passed: 1642
	}, {
		first: 'Marie',
		last: 'Curie',
		year: 1867,
		passed: 1934
	}, {
		first: 'Johannes',
		last: 'Kepler',
		year: 1571,
		passed: 1630
	}, {
		first: 'Nicolaus',
		last: 'Copernicus',
		year: 1473,
		passed: 1543
	}, {
		first: 'Max',
		last: 'Planck',
		year: 1858,
		passed: 1947
	}, {
		first: 'Katherine',
		last: 'Blodgett',
		year: 1898,
		passed: 1979
	}, {
		first: 'Ada',
		last: 'Lovelace',
		year: 1815,
		passed: 1852
	}, {
		first: 'Sarah E.',
		last: 'Goode',
		year: 1855,
		passed: 1905
	}, {
		first: 'Lise',
		last: 'Meitner',
		year: 1878,
		passed: 1968
	}, {
		first: 'Hanna',
		last: 'Hammarström',
		year: 1829,
		passed: 1909
	}];

	const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

	// 筛选 16 世纪出生的发明家
	const fifteen = inventors.filter((inventor) => {
		return (inventor.year >= 1500 && inventor.year < 1600)
	})

	console.table('筛选 16 世纪出生的发明家',fifteen)

	// 展示他们的姓和名
	const fullNames = inventors.map((inventor) => {
		return `${inventor.first} ${inventor.last}`
	})

	console.log('展示他们的姓和名',fullNames)

	// 把他们按照年龄从大到小进行排序
	const ordered = inventors.sort((a, b) => {
		return a.year - b.year
	})

	console.table('把他们按照年龄从大到小进行排序',ordered)

	// 计算所有的发明家加起来一共活了多少岁
	// 0为total的初始值
	const totalYears = inventors.reduce((total, inventor) => {
 		return total + (inventor.passed - inventor.year);
	}, 0);

	console.log('计算所有的发明家加起来一共活了多少岁',totalYears);

	// 按照他们活了多久来进行排序
	const oldest = inventors.sort((a, b) => {
		return (a.passed - a.year) - (b.passed - b.year)
	})

	console.table('按照他们活了多久来进行排序',oldest)

	// 按照姓氏来对发明家进行排序
	const alpha = people.sort((a, b) => {
		const [aFirst, aLast] = a.split(', ')
		const [bFirst, bLast] = b.split(', ')

		return aLast > bLast ? 1 : -1
	})
	console.log('按照姓氏来对发明家进行排序',alpha)

	const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

	// 而此处我们需要统计一个给定数组中各个项的值，恰好可以用到这个方法，在累加器之中，将统计信息存入一个新的对象，最后返回统计值。

	const transportation = data.reduce((obj, item) => {
		if (!obj[item]) {
			obj[item] = 0
		}

		obj[item]++;

		return obj
	}, {})

	console.log('统计给出数组中各个物品的数量',transportation)

	const result = [0, 1, 2, 3, 4].reduce(function(result, currentValue, index, array) {
		result += currentValue;

		return result
	}, 0);

	console.log(result)
	
})();