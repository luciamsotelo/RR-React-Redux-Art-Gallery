import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import { useEffect } from 'react';
import { fetchData, prevImage, nextImage, setArtId, reset } from './features/dataSlice';

const mapStateToProps = state => state.data;

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
      <input value={ data?.artId } onChange={(e) => {
        dispatch(setArtId(Number(e.target.value)))
      }} />
      <div>
        {data?.artId}
        {renderImg()}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);