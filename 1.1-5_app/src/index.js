import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    }
    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    }
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    }

  return (
    <div>
      <Otsikko title={kurssi}/>
      <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} />
      <Yhteensa maara={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
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
            <Osa osa={props.osa1} />
            <Osa osa={props.osa2} />
            <Osa osa={props.osa3} />
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.maara} tehtävää</p>
    )
}

const Osa = (props) => {
    return (
        <p>{props.osa.nimi} {props.osa.tehtavia}</p>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)