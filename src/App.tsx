import './App.css'
import selfitBg from "./assets/selfit-bg.jpg";
import selfitBg2 from "./assets/selfit-bg2.jpg";
import { Form } from "./components/Form";


const App = () => {

  return(
    <div className='w-screen h-screen bg-no-repeat bg-cover bg-bottom flex justify-center items-center max-[1260px]:overflow-x-hidden max-[1260px]:h-[1500px]:' style={{backgroundImage:`url(${selfitBg2})`}}>
      <Form />
    </div>
  )
}

export default App;
