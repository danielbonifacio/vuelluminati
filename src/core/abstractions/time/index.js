import moment from 'moment'

let Time = new Object

Time.format = (date, format, to) => moment(date, format).format(to)

Time.ISO = (date, format, type = 'simple') => {
	if (type === 'simple') return moment(date, format).format('DD/MM/YYYY')
	if (type === 'detail') return moment(date, format).format('YYYY/MM/DD hh:mm')

	else return new SyntaxError(`O tipo ${type} não é válido.`)
}

export default Time
