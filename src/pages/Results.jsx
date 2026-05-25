import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Results() {
  const results = [
    {
      category: "MEN'S BALLON D'OR",
      players: [
        { rank: 1, name: "Kylian Mbappé", percentage: 45 },
        { rank: 2, name: "Erling Haaland", percentage: 30 },
        { rank: 3, name: "Jude Bellingham", percentage: 25 },
      ],
    },
    {
      category: "WOMEN'S BALLON D'OR",
      players: [
        { rank: 1, name: "Aitana Bonmatí", percentage: 46 },
        { rank: 2, name: "Alexia Putellas", percentage: 32 },
        { rank: 3, name: "Sam Kerr", percentage: 22 },
      ],
    },
    {
      category: "YACHINE TROPHY",
      players: [
        { rank: 1, name: "Thibaut Courtois", percentage: 47 },
        { rank: 2, name: "Emiliano Martínez", percentage: 29 },
        { rank: 3, name: "Alisson Becker", percentage: 24 },
      ],
    },
    {
      category: "KOPA TROPHY",
      players: [
        { rank: 1, name: "Lamine Yamal", percentage: 48 },
        { rank: 2, name: "Jamal Musiala", percentage: 31 },
        { rank: 3, name: "Gavi", percentage: 21 },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="results-page">
        <h1 className="results-title">LIVE RESULTS 2026</h1>
        <p className="results-subtitle">Real-time voting results</p>

        <div className="container">
          <div className="row g-4">
            {results.map((section) => (
              <div className="col-lg-6" key={section.category}>
                <div className="result-card">
                  <h2>{section.category}</h2>

                  {section.players.map((player) => (
                    <div className="result-player" key={player.rank}>
                      <div className="result-row">
                        <div
  className={`result-rank ${
    player.rank === 2
      ? "second-rank"
      : player.rank === 3
      ? "third-rank"
      : ""
  }`}
>
  {player.rank}
</div>
                        <span className="result-name">{player.name}</span>
                       <div
  className={`result-percent ${
    player.rank === 2
      ? "second-percent"
      : player.rank === 3
      ? "third-percent"
      : ""
  }`}
>
  {player.percentage}%
</div>
                      </div>

                      <div className="result-bar">
                        <div
  className={`result-fill ${
    player.rank === 2 ? "second" : player.rank === 3 ? "third" : ""
  }`}
  style={{ width: `${player.percentage}%` }}
></div>
                      </div>
                    </div>
                  ))}

                  <div className="result-total">
                    <span>Total Votes</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="results-note">
          ● Results update in real-time as users vote
        </p>
      </div>

      <Footer />
    </>
  );
}

export default Results;