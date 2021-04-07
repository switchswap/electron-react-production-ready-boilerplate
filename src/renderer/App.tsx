import { useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const App = () => {
  useEffect(() => {
    console.log("App started!");
  }, [])

  return (
    <div>
      <h1>Welcome to the boilerplate!</h1>
    </div>
  );
};
