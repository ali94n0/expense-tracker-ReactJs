import { useEffect, useState } from "react";

const TransActions = ({ transaction }) => {
  const [serachItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transaction);

  const filterTnx = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transaction);
      return;
    }
    const filtered = transaction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTnx(e.target.value);
  };

  useEffect(() => {
    filterTnx(serachItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transaction]);

  if (!transaction.length) {
    return "add some tnx...";
  }

  return (
    <section style={{ width: "100%" }}>
      <h2>Transaction:</h2>
      <input
        type="text"
        value={serachItem}
        onChange={changeHandler}
        placeholder="search transaction ..."
        className="search"
      ></input>
      <div>
        {filteredTnx.length
          ? filteredTnx.map((t) => {
              return (
                <div
                  key={t.id}
                  className="transaction"
                  style={{
                    borderRight: t.type === "expense" && "4px solid #ec4899",
                  }}
                >
                  <span>{t.desc}</span>
                  <span>$ {t.amount}</span>
                </div>
              );
            })
          : "no tnx match!"}
      </div>
    </section>
  );
};

export default TransActions;
