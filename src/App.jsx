import Count from "./components/Count"
import ExampleLocalStorage from "./components/ExampleLocalStorage"
import FriendList from "./components/FriendList"
import Movie from "./components/Movie"

const App = () => {
  return (
    <section>
      <Count />
      <hr />
      <FriendList />
      <hr />
      <Movie />
      <hr />
      <ExampleLocalStorage />
    </section>
  )
}

export default App