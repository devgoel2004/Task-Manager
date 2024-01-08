import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import api from "../api";

const useFetch = () => {
  const [state, setState] = useState({
    loading: false,
    data: null,
    successMsg: "",
    errorMsg: "",
  });
  const fetchData = useCallback(async (config, otherOptions) => {
    const { showSuccessToast = true, showErrorToast = true } =
      otherOptions || {};
    setState((state) => ({ ...state, loading: true }));
    try {
      const { data } = await api.request(config);
      console.log(data);
      setState({
        loading: false,
        data,
        successMsg: data.msg || "success",
        errorMsg: "",
      });
      if (showSuccessToast && data.msg) toast.success(data.msg);
      return Promise.resolve(data);
    } catch (error) {
      const msg = error.response?.data?.msg || error.message || "error";
      console.log(error);
      setState({
        loading: false,
        data: null,
        errorMsg: msg,
        successMsg: "",
      });
      if (showErrorToast) toast.error(msg);
      return Promise.reject(error);
    }
  }, []);

  return [fetchData, state];
};

export default useFetch;
