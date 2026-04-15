import React from "react";

const NewProps = ({ names, user }) => {
  const { brothers } = user;
  const { elderBrother } = brothers;
  //   console.log(elderBrother);
  return (
    <div>
      <h1>
        {() => {
          const helloe = Object.entries(elderBrother);
          console.log(helloe);
        }}
      </h1>
    </div>
  );
};

export default NewProps;
