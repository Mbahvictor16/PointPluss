import React from "react";
import Display from "./Display";
import { terms } from "./terms";

export default function TermsCondition() {
    return <Display tabsName="Terms and Conditions" displayList={terms} />;
}
