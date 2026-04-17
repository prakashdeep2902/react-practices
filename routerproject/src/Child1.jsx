const Child1 = ({ setData }) => {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter child2 data"
          onChange={(e) => setData(e.target.value)}
        />
      </div>
    </>
  );
};

export default Child1;
