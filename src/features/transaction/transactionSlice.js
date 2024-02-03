import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTransaction } from "./transactionAPI";

const initalState = {
  transactions: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  async () => {
    const transactions = await getTransaction();
    return transactions;
  }
);
