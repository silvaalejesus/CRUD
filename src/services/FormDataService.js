let PRODUCTS = [
  {Nome: 'Ana', EstadoCivil: 'Solteiro', Profissao: 'Published', Telefone: '', EnderecoCompleto: '', Email: ''},
  {Nome: 'Ana maria', EstadoCivil: 'Solteiro', Profissao: 'Published', Telefone: '', EnderecoCompleto: '', Email: ''}
]

const getAll = () => {
  return PRODUCTS;
};

const getById = (Nome) => {
  if (Nome === "") return PRODUCTS
  //var filtrado = PRODUCTS.filter((obj) => { return obj.title == title; });  // retorna os objs que são iguais
  //var filtrado = PRODUCTS.filter((obj) => obj.title == title ); // retorna os objs que são iguais
  
  var filtrado = PRODUCTS.filter((obj) => obj.Nome.includes(Nome) ); // retorna os objs que contém 
  
  return filtrado
};

const create = (data) => {
  return PRODUCTS.push(data);
};

const update = (key, data) => {
 
  PRODUCTS.forEach(function(item) {
    if (item.Nome === key){
      item.Nome = data.Nome
      item.EstadoCivil = data.EstadoCivil
      item.Profissao = data.Profissao
      item.Telefone = data.Telefone
      item.EnderecoCompleto = data.EnderecoCompleto
      item.Email = data.Email
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
