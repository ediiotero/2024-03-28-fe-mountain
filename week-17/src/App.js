import './App.css';
import Age from './components/Age';
import UserInfo from './components/UserInfo';
import CompanyInfo from './components/CompanyInfo';
import withUserId from './components/withUserId';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './store/index'

const SomeUserInfo = withUserId(UserInfo)
const SomeCompanyInfo = withUserId(CompanyInfo)

function App() {

  const account = useSelector(state => state.account)
  const dispatch = useDispatch()

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>{account}</h1>
      <div>
        <button onClick={() => depositMoney(5)}>Deposit</button>
        <button onClick={() => withdrawMoney(1)}>Withdraw</button>
      </div>
      <Age name={'Tobi'} age={3} />
      <SomeUserInfo userId={2} />
      <SomeCompanyInfo userId={2} />
      <SomeUserInfo userId={3} />
      <SomeCompanyInfo userId={5} />
    </div>
  );
}

export default App;
