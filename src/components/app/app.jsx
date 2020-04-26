import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../../containers/private-route/private-route.jsx'
import LoginContainer from '../../containers/login-container/login-container'
import LinkButton from '../link-button/link-button.jsx'
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx'
import ProfileContainer from '../../containers/profile-container/profile-container.jsx'
import NotFound from '../not-found/not-found.jsx'

// Must be fixed: there is a routing problem: 
// when you navigate through any non-js-client means you get 'Cannot GET /{pageName}'
// It's caused by CSR specifics about which you should read in attached material
// The problem is easily solved in webpack config but for a better understanding i
// really advise you to read the whole article

const App = () => (
    <div>
      <header className="header">
        <div className="top-menu">
          <LinkButton to="/" label={'Главная'} />
          <LinkButton to="/profile" label={'Профиль'} />
          <LinkButton to="/login" label={'Логин'} />
          <LinkButton to="/kvazavr" label={'Не найдено'} />
        </div>
      </header>
      <div className="content">
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route path="/login" component={LoginContainer} />
          <PrivateRoute path="/profile" component={ProfileContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
)

export default App

// General Advises:

// Things you could be proud of:

// You seem to solidly grasp component approach. There is a proper usage of 
// state and props where it's needed and proper separation between class and functional components.
// A sidenote: although everything works properly, you probably don't need class components in 2020 and
// it would be useful for you to read React Hooks documentation

// ESlint and Prettier are two great tools which would most definetly improve your code quality and 
// overall work performance

//Should be improved:

// Structural:

//Comment about '*A note about redirection, read at App.js':

// This is a really entangled and non-declarative way to navigate user through application.
// It's logic is spread all over the place and would be hard to modify and maintain.
// AFAIK interacting with the History API is the way of programmatic navigation and if you wish it to 
// depend on your redux state you should probably discover react-router-redux

// Could be improved:

// Structural

// You probably don't need a separate container folder. Login and profile containers could be safely combined
// with the appropriate components for better composition and private-route could be just moved to components as is.

// Stylistic:

// For any cases like: 

// const WelcomeScreen = () => {
//  return (
//      <h2>Главная страница</h2>
//  )
// }

// When the only thing you do in your RFC is returning JSX you may wish to shorten function body to
// () => (<JSX />) instead of () => ({return(<JSX />)})

//React.Fragment without any props such as 'key' may be freely shorthanded to <></>

// Things to research:

// React Hooks https://reactjs.org/docs/hooks-intro.html
// React-router-redux: https://github.com/reactjs/react-router-redux
// About routing problem: https://tylermcginnis.com/react-router-cannot-get-url-refresh/