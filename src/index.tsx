import  ReactDOM  from "react-dom";

// import { GuestList } from "./state/GuestList";
// import { UserSearch } from "./state/UserSearch";
// import { EventComponent } from "./event/EventComponent";
// import { UserSearch } from "./refs/UserSearch";

import { ReduxApp } from "./redux/Component/App"

const App = () => {

  // return (<GuestList/>);
  // return (<UserSearch/>);
  // return (<UserSearch/>);
  <div></div>
  return (<ReduxApp/>);
}

ReactDOM.render(<App/>, document.querySelector('#root'));