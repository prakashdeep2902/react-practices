import "./usersCards.css";

const usersCards = ({ usersDetails, children }) => {
  console.log("usersDetails+++>", usersDetails);
  return (
    <>
      <div className="MainCardSclass">
        {usersDetails.map((user) => (
          <div className="card" index={user.id}>
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
      {children}
    </>
  );
};

export default usersCards;
