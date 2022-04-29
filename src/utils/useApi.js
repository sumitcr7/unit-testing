import { useState, useCallback } from "react";

import axios from "axios";

const useApi = ({ url, method, data = null }) => {
  const [response, setResponse] = useState({
    data: null,
    err: null,
    isSuccessful: null,
  });

  // TODO
  /* when I try to invoke this hook from component I am not able to 
  mock success and error scenarios of axios*/
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
            data: res.data || "Success",
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
