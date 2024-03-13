import './App.css';
import Sent from './Send/Send';
import Text from './Texts/Text';
import { data } from './Texts/data';

function App() {

  return (
    <>
      {data.map((item, index) => (
        <Text key={index} {...item} />
      ))}

      <Sent/>

    </>
  );
}

export default App;
