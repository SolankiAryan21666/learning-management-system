import { useLoadUserQuery } from "@/features/api/authApi";
import LoadingSpinner from "./LoadingSpinner";

const AppLoader = ({ children }) => {
  const { isLoading, isError } = useLoadUserQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    console.error("Failed to load user");
  }

  return children;
};

export default AppLoader;
