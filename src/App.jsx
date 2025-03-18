const Button = () => {
  const handleClick = () => console.log(Math.round(Math.random() * 10))
  return <button onClick={handleClick}>Click</button>
}

const Copy = () => {
  const copyHandler = () => {
    console.log("Stop stealing my content")
  }
  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis cum minus nobis ullam aperiam? Quidem, obcaecati numquam. Harum, perferendis.
    </p>
  )
}

const Move = () => {
  const moveHandler = () => {
    alert("Mouse move event fired")
    console.log("Mouse move event fired")
  }
  return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam veritatis doloremque laudantium ullam repudiandae, vitae velit modi est exercitationem sit!
    </p>
  )
}

function App() {
  return (
    <section>
      <Button />
      <Copy />
      <Move />
    </section>
  )
};

export default App;