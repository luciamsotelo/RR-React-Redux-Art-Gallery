import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { useEffect } from 'react';
import { fetchData, prevImage, nextImage, setArtId, reset } from './features/dataSlice';

const mapStateToProps = state => state.data;

let debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args)
    }
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
}

function App({artId}) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, artId]);

  const renderImg = () => {
    if(data?.apiData && data.apiData.primaryImage) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  };
  const onInput = debounce(e => {
    dispatch(setArtId(e.target.value))
  }, 500)

  return (
    <div className="App">
      <div>
        <button onClick={() => {
          dispatch(fetchData())
        }}>Thunk!</button>
        <button onClick={() => {
          dispatch(reset())
        }}>Clear</button>
        <button onClick={() => {
          dispatch(nextImage())
        }}>Next</button>
        <button onClick={() => {
          dispatch(prevImage())
        }}>Back</button>
      </div>
      <input value={ data?.artId } onChange={onInput} />
      <div>
        {data?.artId}
        {renderImg()}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);