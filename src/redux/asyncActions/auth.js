import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import http from "../../helpers/http";

export const login = createAsyncThunk("auth/login", async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post("/auth/login", send, {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    });
    result.token = data.results.token;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const register = createAsyncThunk("auth/register", async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post("/auth/register", send, {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    });
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.result[0].message;
    return result;
  }
});

export const createpin = createAsyncThunk('auth/createpin', async request => {
  const results = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().post('/auth/createPin', send);
    results.success = data.message;
    return results;
  } catch (e) {
    results.error = e.response.data.message;
    return results;
  }
});