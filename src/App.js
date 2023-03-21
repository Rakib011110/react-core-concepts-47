import './App.css';


const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'sopno' },
  { name: 'shuvro', job: 'pathor' }
]
function App() {

  const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Anwar'];

  return (
    <div className="App">

      {
        nayoks.map(nayok => <li>{nayok} </li>)
      }

      {
        singers.map(singer => <Persion
          name={singer.name}
        >

        </Persion>)
      }


      {/* <Persion name={nayoks[0]} nayeka="sadiya"></Persion> */}
      {/* <Persion name="sadiya"></Persion> */}
      <h1> amar sonar bangla</h1>

      <Friend />
      <Persion></Persion>
      <Persion></Persion>


    </div>
  );
}



function Persion(props) {
  console.log(props);
  return (
    <div className="persion">

      <h3>  {props.name} </h3>
      <p> {props.nayeka}</p>
    </div>

  )

}
function Friend() {
  return (

    <div>
      <h2> Shohan</h2>

      <h2> Rahul</h2>
    </div>
  )

}


export default App;
