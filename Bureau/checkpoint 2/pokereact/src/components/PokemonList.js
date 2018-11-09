import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = ({
  pkmnList,
  handlePreviousPage,
  handleNextPage,
  checkPreviousPage,
  checkNextPage,
  nbOfCardsDisplayed,
  fullPkmnList
}) => (
  <div>
    {pkmnList.map((pkmn, index) => (
      <Pokemon key={index} index={index} pkmn={pkmn} />
    ))}
    {nbOfCardsDisplayed < fullPkmnList.length && (
      <div>
        <button disabled={checkPreviousPage} onClick={handlePreviousPage}>
          {" << "}
        </button>
        <button disabled={checkNextPage} onClick={handleNextPage}>
          {" >> "}
        </button>
      </div>
    )}
  </div>
);

export default PokemonList;