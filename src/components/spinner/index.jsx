import { Loader } from "./styles";

export const Spinner = ({ isActive }) => {
  return <>{isActive && <Loader></Loader>}</>;
};
