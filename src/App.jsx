function App() {

  const data = ["Harsh", "Ankit", "Jay", "Piyush", "Akash"];
  return (
    <div>
      {data.map((elem, index) => (
        <div key={index} className="px-3 py-4 bg-zinc-300 w-fit rounded-md mt-3">
          {elem}
        </div>
      ))}
    </div>
  )
}

export default App