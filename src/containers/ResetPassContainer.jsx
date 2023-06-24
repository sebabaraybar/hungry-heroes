import React from "react";
import ResetPass from "../components/domain/RequestPass/ResetPass";

const ResetPassContainer = function ({token}) {
	return (
		<ResetPass token={token}/>
	);
};

export default ResetPassContainer;