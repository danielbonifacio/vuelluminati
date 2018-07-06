/*
  Moment é uma biblioteca que gerencia e formata datas
  Este arquivo exporta algumas funções personalizadas que utilizam ele.
*/
import moment from 'moment'

// Formata uma data simples (YYYY-MM-DD) para o padrão
const isoSimple = function (date) {
  return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
}

// Formata uma data detalhada composta (sem milisegundos)
const isoDetailed = function (date) {
  return moment(date, 'YYYY-MM-DDThh:mm:ss').format('YYYY/MM/DD hh:mm');
}

export default {
  isoSimple,
  isoDetailed
}
