import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";


function Results() {
  const [results, setResults] = useState([]);

 useEffect(() => {
  const fetchResults = async () => {
    try {
      const response = await axios.get(
        "https://ballon-dor-backend-production.up.railway.app/api/nominees"
      );
  
      const nominees = response.data;

      const categories = [
        { id: 1, name: "MEN'S BALLON D'OR" },
        { id: 2, name: "WOMEN'S BALLON D'OR" },
        { id: 3, name: "YACHINE TROPHY" },
        { id: 4, name: "KOPA TROPHY" },
      ];

      const formattedResults = categories.map((category) => {
        const players = nominees
          .filter(
            (player) => player.category_id === category.id
          )
          .sort((a, b) => b.votes - a.votes)
          .slice(0, 3);

        const totalVotes = players.reduce(
          (sum, player) => sum + player.votes,
          0
        );

        return {
          category: category.name,
          players: players.map((player, index) => ({
            rank: index + 1,
            name: player.name,
            percentage:
              totalVotes > 0
                ? Math.round(
                    (player.votes / totalVotes) * 100
                  )
                : 0,
          })),
        };
      });

      setResults(formattedResults);
    } catch (error) {
      console.error(error);
    }
  };

  fetchResults();

  const interval = setInterval(fetchResults, 5000);

  return () => clearInterval(interval);
}, []);

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