import { useState, useCallback } from "react";

import axios from "axios";

const useApi = ({ url, method, data = null }) => {
  const [response, setResponse] = useState({
    data: null,
    err: null,
    isSuccessful: null,
  });

  const callToApi = useCallback(
    (reqData) => {
      setResponse({
        data: null,
        err: null,
        isSuccessful: null,
      });

      axios({
        method,
        url,
        data,
        ...reqData,
      })
        .then((res) => {
          setResponse({
            data: res.data,
            err: null,
            isSuccessful: true,
          });
        })
        .catch((err) => {
          setResponse({
            data: null,
            err,
            isSuccessful: false,
          });
        });
    },
    [url, method, data]
  );
  return [response, callToApi];
};

export default useApi;
