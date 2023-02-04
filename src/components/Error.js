import {useRouteError} from "react-router-dom";
const Error = () => {
    const error = useRouteError();
  return (
    <>
      <div className="p-6">
        <h1>Opps somrthing went wrong!</h1>
        <h3>{error.status + " " + error.statusText}</h3>
      </div>
    </>
  );
};
export default Error;