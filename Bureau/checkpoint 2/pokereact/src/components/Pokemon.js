import React from "react";

const Pokemon = ({ pkmn }) => (
	<div>
		<h2>{pkmn.name}</h2>
		{pkmn.imageUrl && <img src={pkmn.imageUrl} alt="I arrive..." />}
		{pkmn.attacks && (
			<div>
				{pkmn.attacks.map((attack, index) => (
					<p key={index}>{attack.name}</p>
				))}
			</div>
		)}
	</div>
);

export default Pokemon;