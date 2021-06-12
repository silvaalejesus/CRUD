import http from "../../http-common";

const getAll = () => {
  return http.get("/Produto");
};
const get = id => {
  return http.get(`/Produto/${id}`);
};
const create = data => {
  return http.post("/Produto", data);
};
const update = (id, data) => {
  return http.put(`/Produto/${id}`, data);
};
const remove = id => {
  return http.delete(`/Produto/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/Produto`);
};
const findByTitle = title => {
  return http.get(`/Produto?title=${title}`);
};

const exportedObject = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
}
export default exportedObject