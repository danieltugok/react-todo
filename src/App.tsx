import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';


const App = () => {
  const [list, setList] = useState<Item[]>([  
    { id: 1 , name: 'Wash the dishes', done: false },
    { id: 2 , name: 'Buy on Grocery Store', done: false }
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <ul>
          {list.map((item,index)=>(
            <li key={index}>{item.name}</li>
          ))}
        </ul>

      </C.Area>
    </C.Container>
  );
}

export default App;