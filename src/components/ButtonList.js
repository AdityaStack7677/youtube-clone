import React from "react";
import Button from "./Button";

const ButtonList = () => {
const buttonNames = [
	"All",
	"Gaming",
	"Songs",
	"Live",
	"Soccer",
	"Cricket",
	"Cooking",
	"Cricket",
	"Valentines"
];

return (
	<div className="flex">
		{buttonNames.map((name, idx) => (
			<Button key={idx} name={name} />
		))}
	</div>
);
};

export default ButtonList;