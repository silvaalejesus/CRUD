let PRODUCTS = [
  {nomeCliente: 'Ana', telefone: '(71)9863-6784', email: 'email@email.com', nomeAtendente: 'Gomes',
  dataInicio: '06/10/2019', proficional: 'Tiago'},
{nomeCliente: 'Carla', telefone: '(71)9863-6784', email: 'tiago@gmail.com', nomeAtendente: 'Gomes',
dataInicio: '06/10/2019', proficional: 'Tiago'},]
/* {nomeCliente: 'Carla', telefone: '(71)9863-6784', email: 'Published', nomeAtendente: '', EnderecoCompleto: '', Email: '',
dataInicio: '06/10/2019', proficional: 'Tiago'},] */
const getAll = () => {
  return PRODUCTS;
};

const getById = (nomeCliente) => {
  if (nomeCliente === "") return PRODUCTS
  //var filtrado = PRODUCTS.filter((obj) => { return obj.title == title; });  // retorna os objs que são iguais
  //var filtrado = PRODUCTS.filter((obj) => obj.title == title ); // retorna os objs que são iguais
  var filtrado = PRODUCTS.filter((obj) => obj.nomeCliente.includes(nomeCliente) ); // retorna os objs que contém 
  return filtrado

};

const create = (data) => {
  return PRODUCTS.push(data);
};

const update = (key, data) => {
  console.log(key)
  PRODUCTS.forEach(function(item) {
    if (item.nomeCliente === key){
      item.nomeCliente = data.nomeCliente
      item.telefone = data.telefone
      item.email = data.email
      item.nomeAtendente = data.nomeAtendente
      item.dataInicil = data.dataInicil
      item.proficional = data.proficional
    }
  });
  return 
};

const remove = (key) => {
  return PRODUCTS.splice(PRODUCTS.indexOf(key), 1);
};

const removeAll = () => {
  PRODUCTS=[]
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  getById
};
