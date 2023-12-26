import React from "react";
import { useState } from "react";
import  pokimons  from "../data/mydata.json";
import Scarecrow from "../components/scarecrow";
import {Character} from "../components/character";
 

export default function App(){
  const [scarecrowhp, setIndex] = useState(100);
  const [attack, setattack] = useState(true);

  function dealdmg(dmg){
    if(scarecrowhp-dmg<=0){
      setattack(false);
      setIndex(scarecrowhp-scarecrowhp);

    }
    else{
      setIndex(scarecrowhp-dmg);
    }
  }
  return (
        <>
          {pokimons.map((x)=> <Character {...x} functiondmg = {dealdmg} canattack={attack}></Character>)}


          <Scarecrow hp={scarecrowhp} />

        </>

    );
}