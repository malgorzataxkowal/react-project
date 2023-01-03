import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/shoes/";

export function getShoes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveShoe(shoe) {
  return fetch(baseUrl + (shoe.id || ""), {
    method: shoe.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(shoe),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteShoe(shoeId) {
  return fetch(baseUrl + shoeId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
