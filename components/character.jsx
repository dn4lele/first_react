
export function Character({name ,imgLink , abilities , functiondmg , canattack}){
    
    return (
        <>
            <h1>
                {name}
            </h1>
            <img src={imgLink} />
            <h1> {canattack && abilities.map(single => <button onClick={()=>functiondmg(single.damage)}>  {single.name} -{single.damage} </button>)} </h1>

        </>
    );
    
    
}