import * as React from 'react';
import Channels from './components/Channels';
import Events from './components/Events';
import Profile from './components/Profile';
import { Container } from '@material-ui/core';
import TopBar from './components/TopBar';
import { useSelector } from 'react-redux';
import { selectPageIndex } from './store/page';
import { PageIndex } from './model/enums';
import JoinedChannelModal from './components/JoinedChannelModal';

function App() {
  const pageIndex = useSelector(selectPageIndex)

  const renderPage = () => {
    switch (pageIndex) {
      case PageIndex.CHANNELS:
        return <Channels />
      case PageIndex.EVENTS:
        return <Events />
      case PageIndex.PROFILE:
        return <Profile />
      default:
        throw new Error(`Page index ${pageIndex} not supported`)
    }
  }

  return (
    <div className="App">
      <TopBar />
      <JoinedChannelModal/>
      <Container maxWidth="md">
        {renderPage()}
      </Container>
    </div>
  );
}

/* This would be used for class component redux binding */
/* Way how to map redux functionality to class component
*  In function components we use useSelector and useDispatch resp instead
*  This maps state selectors and state dispatches resp to props */
/*export default connect(state => ({
  events: selectEvents(state)
}), {
  fetchEvents
})(App);*/
export default App;
