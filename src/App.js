import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import {
  fetchData,
  nextImage,
  prevImage,
  setArtId,
  reset
} from './features/dataSlice';

function App(props) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const renderImg = () => {
    if(data?.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => {
          dispatch(fetchData())
        }}>Thunk!</button>
        <button onClick={() => {
          // dispatch reset
          dispatch(reset())
        }}>Clear</button>
        <button onClick={() => {
          dispatch(nextImage())
        }}>Next</button>
        <button onClick={() => {
          // dispatch prev
          dispatch(prevImage())
        }}>Back</button>
      </div>
      <input value={ data?.artId } onChange={(e) => {
        // dispatch setArtId
        dispatch(setArtId(e.target.value))
      }} />
      <div>
        {data?.artId}
        {renderImg()}
      </div>
    </div>
  );
}

export default App;