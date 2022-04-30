import React from "react";
import User from "../User/User";
import useApi from "../utils/useApi";
import FileUpload from "../FileUpload/FileUpload";

const Home = () => {
  const [data, callToApi] = useApi({
    url: "http://localhost:3030/details",
    method: "get",
  });
  const btnConfig = {
    onClick: () => {
      // TODO

      /* I can click button using getbyrole method which will invoke below 
      function but after invoking I want to mock useAPI/axios response
      or error so that I can cover the scenario related to the the api result */
      callToApi();
    },
  };

  const fileUploaded = (success) => {
    // TODO
    // could not find a way to cover this part as facing issue while mocking axios in file upload component
    if (success) {
    }
  };
  return (
    <div>
      <p>Home page</p>
      {/*   // TODO       */}
      {/* Because the axios response is not mocked, the following condition is not covered. */}
      {data && data.data?.map(({ label }) => <p key={label}>{label}</p>)}
      <User btnConfig={btnConfig} />
      <FileUpload onUpdate={fileUploaded} />
    </div>
  );
};

export default Home;
