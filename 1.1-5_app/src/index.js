import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    

  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko title={kurssi}/>
      <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} 
      t1={tehtavia1} t2={tehtavia2} t3={tehtavia3} />
      <Yhteensa maara={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

const Otsikko = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}

const Sisalto = (props) => {
    return (
        <div>
            <p>{props.osa1} {props.t1}</p>
            <p>{props.osa2} {props.t2}</p>
            <p>{props.osa3} {props.t3}</p>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.maara} tehtävää</p>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)