import React from 'react'

export default props => [

<h1 key='h1'>Bom Dia, {props.nome} !!</h1>,
<h2 key= 'h2'> Até Breve!</h2>]


// melhor usar o Fragment ou uma div
// export default props => 
// <React.Fragment>
// <h1>Bom Dia, {props.nome} !!</h1>
// <h2> Até Breve!</h2>
// </React.Fragment>

// melhor usar o Fragment ou uma div
// export default props => 
// <div>
// <h1>Bom Dia, {props.nome} !!</h1>
// <h2> Até Breve!</h2>
// </div>