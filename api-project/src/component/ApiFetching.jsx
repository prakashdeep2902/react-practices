import { useEffect } from "react";

export const ApiFetching = () => {
  useEffect(() => {
    const api = "https://jsonplaceholder.typicode.com/comments";

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>ApiFetching</div>;
};
