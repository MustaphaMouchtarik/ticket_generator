import React,{useState} from "react";
import "./ticket.css";
export default function ticket(props) {
    const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
    return(
        <div className="cont" >
            <div id="verti1">
                <div id="hori1">
                    <img src='/images/logo-full.svg'></img>
                    <h5>{formattedDate} / Morroco</h5>
                </div>
                <div id="hori2">
                    <div id="horimage">
                        <img src={props.picture}></img>
                    </div>
                    <div id="info">
                        <h2>{props.fullname}</h2>
                        <h5>@ {props.username}</h5>
                    </div>
                </div>

            </div>
            <div id="verti2">
                <h2>#01069</h2>
            </div>
        </div>
    )
}