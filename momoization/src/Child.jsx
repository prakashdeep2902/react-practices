import React, { useRef } from "react";

const Child = React.memo(() => {
  const refCount = useRef(0);

  console.log(refCount.current + 1);
  return (
    <div>
      <h1>This is Child</h1>
    </div>
  );
});

// const Child = () => {
//   const refCount = useRef(0);
//   console.log(refCount.current + 1);
//   return (
//     <div>
//       <h1>This is Child</h1>
//     </div>
//   );
// };
export default Child;
