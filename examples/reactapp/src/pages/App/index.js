import BasicRoute from '../../router';
import './index.css';

function App(props) {
  console.log(window.location)
  return (
    <>
    <div style={{textAlign:'center'}}>
      <h1>React 17</h1>
      <span style={{color: 'red'}}>(可以加载路由的内容，点击跳转可以切换路由)</span>
    </div>
    <BasicRoute />
    </>
  );
}

export default App;
