import axiosInstance from "../../utils/axios";

/**
 * Retrieves a transaction from the server.
 *
 * @return {Object} the transaction data
 */
export const getTransaction = async () => {
  const response = await axiosInstance.get("/transactions");
  return response.data;
};

/**
 * Add a transaction using the provided data.
 *
 * @param {Object} data - the data for the transaction
 * @return {Object} the response data from the transaction
 */
export const addTransaction = async (data) => {
  const response = await axiosInstance.post("/transactions", data);
  return response.data;
};

/**
 * Edit a transaction by sending a patch request with updated data.
 *
 * @param {string} id - The ID of the transaction to be edited
 * @param {object} data - The updated data for the transaction
 * @return {object} The updated transaction data
 */
export const editTransaction = async (id, data) => {
  const response = await axiosInstance.put(`/transactions/${id}`, data);
  return response.data;
};

/**
 * Deletes a transaction by making a DELETE request to the server.
 *
 * @param {number} id - The ID of the transaction to be deleted
 * @return {Object} The data returned from the server after deleting the transaction
 */
export const deleteTransaction = async (id) => {
  const response = await axiosInstance.delete(`/transactions/${id}`);
  return response.data;
};
