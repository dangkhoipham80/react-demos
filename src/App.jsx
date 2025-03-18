import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <section id="section">
      <h1>My Website</h1>
      <article>
        <h2>Welcome To React</h2>
        <p className="text">Paragraph Content</p>
        <WelcomeMessage />
        <img src="" alt="" />
        <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />
      </form>
      </article>
    </section>
  )
};

export default App;