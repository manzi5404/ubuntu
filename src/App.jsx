function App() {
  const cards = ['React Application', 'Apache Web Server', 'Ubuntu Server']
  return (
    <div className="page">
      <header className="hero">
        <h1>Manzi's Hosting Test</h1>
        <h2>Welcome to My Ubuntu Server!</h2>
        <p className="name">Manzi Lucky</p>
        <p className="desc">
          This React application is hosted using Ubuntu Server, Apache2 and FTP.
        </p>
      </header>
      <section className="cards">
        {cards.map((c) => (
          <div className="card" key={c}>
            <h3>{c}</h3>
            <p>Status: Online</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
