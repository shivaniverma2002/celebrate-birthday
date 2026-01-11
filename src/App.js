import React, { useState, useEffect } from 'react';
import { Cake, Gift, PartyPopper, Sparkles, Heart, Music, Scissors } from 'lucide-react';
import './App.css';

const BirthdayWishPage = () => {
  const [confetti, setConfetti] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [balloons, setBalloons] = useState([]);
  const [showCake, setShowCake] = useState(false);
  const [candlesLit, setCandlesLit] = useState(true);
  const [cakeCut, setCakeCut] = useState(false);

  useEffect(() => {
    // Generate confetti
    const confettiItems = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      color: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94'][Math.floor(Math.random() * 5)]
    }));
    setConfetti(confettiItems);

    // Generate balloons
    const balloonItems = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: 10 + (i * 8),
      delay: i * 0.2,
      color: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#FF8B94', '#C7CEEA'][i % 6]
    }));
    setBalloons(balloonItems);

    // Show message after delay
    setTimeout(() => setShowMessage(true), 500);
  }, []);

  return (
    <div className="birthday-container">

      
      {/* Confetti */}
      {confetti.map((item) => (
        <div
          key={item.id}
          className="confetti"
          style={{
            left: `${item.left}%`,
            backgroundColor: item.color,
            animation: `fall ${item.duration}s linear ${item.delay}s infinite`,
          }}
        />
      ))}

      {/* Balloons */}
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon"
          style={{
            left: `${balloon.left}%`,
            backgroundColor: balloon.color,
            animation: `float 4s ease-in-out ${balloon.delay}s infinite`,
          }}
        >
          <div className="balloon-string" />
        </div>
      ))}

      {/* Main Content */}
      <div className="main-content">
        <div className={`card ${showMessage ? 'show' : ''}`}>
          <div className="card-inner">
            {/* Cake Icon */}
            <div className="cake-icon-wrapper">
              <button onClick={() => setShowCake(true)} className="cake-button">
                <Cake className="cake-icon" />
              </button>
            </div>

            {/* Main Title */}
            <h1 className="main-title">
              Happy Birthday! 🎉
            </h1>

            {/* Subtitle */}
            <div className="subtitle-section">
              <p className="subtitle">
                <span className="highlight">Mr. Akeel Ahmad</span>
              </p>
              <div className="icons-row">
                <Sparkles className="icon-sparkle" />
                <Heart className="icon-heart" />
                <Sparkles className="icon-sparkle" />
              </div>
            </div>

            {/* Birthday Message */}
            <div className="message-box">
              <p className="message-text">
                On your special day, I just want you to know how grateful I am to have you in my life. Because of you, so many things in my life have changed for the better. You brought positivity, clarity, and strength when I needed it the most.
                Your presence has taught me valuable lessons and helped me grow as a person. I truly appreciate the impact you've had on my life, and I'll always be thankful for that.
                Wishing you a birthday filled with happiness, peace, and everything your heart desires. May this year bring you success, good health, and endless smiles. You deserve all the good things life has to offer. 💫🎂
              </p>
            </div>

            {/* Footer Message */}
            <div className="footer-section">
              <p className="quote">
                "Age is merely the number of years the world has been enjoying you!"
              </p>
              <p className="wish-text">
                Make a Wish! 🌟
              </p>
            </div>
          </div>

          {/* Floating Hearts */}
          <div className="floating-hearts">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="float-heart"
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cake Modal */}
      {showCake && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Close Button */}
            <button onClick={() => setShowCake(false)} className="close-button">
              ×
            </button>

            <div className="modal-header">
              <h2 className="modal-title">Make a Wish! 🎂</h2>
              <p className="modal-subtitle">Click on the candles to blow them out!</p>
            </div>

            {/* Birthday Cake */}
            <div className="cake-container">
             
              {cakeCut && (
                <div className="cut-message mb-2">
                  🍰 Yummy! Enjoy the cake! 
                </div>
              )}

              {/* Cartoon Character Blowing */}
              <div className="cartoon-character">
                <div className="cartoon-face">
                  <div className="cartoon-eye left" />
                  <div className="cartoon-eye right" />
                  <div className="cartoon-mouth" />
                  <div className="cartoon-cheek left" />
                  <div className="cartoon-cheek right" />
                </div>
                {candlesLit && (
                  <div className="wind-container">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="wind" style={{ animationDelay: `${i * 0.3}s` }}>
                        💨
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Candles */}
              <div className="candles-row">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="candle-wrapper">
                    {candlesLit && (
                      <div onClick={() => setCandlesLit(false)} className="flame-wrapper">
                        <div className="flame">
                          <div className="flame-inner" />
                        </div>
                      </div>
                    )}
                    <div className={`candle ${i % 2 === 0 ? 'pink' : 'blue'}`}>
                      <div className="candle-highlight" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Cake Layers */}
              <div className="cake-layer top">
                <div className="layer-highlight" />
                <div className="frosting-dots">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="frosting-dot" />
                  ))}
                </div>
                {cakeCut && <div className="cake-slice" />}
              </div>

              <div className="cake-layer middle">
                <div className="layer-highlight" />
                <div className="layer-decorations">
                  {[...Array(8)].map((_, i) => (
                    <Heart key={i} className="decoration-heart" />
                  ))}
                </div>
                <div className="frosting-dots">
                  {[...Array(15)].map((_, i) => (
                    <div key={i} className="frosting-dot" />
                  ))}
                </div>
              </div>

              <div className="cake-layer bottom">
                <div className="layer-highlight" />
                <div className="layer-decorations">
                  {[...Array(10)].map((_, i) => (
                    <Sparkles key={i} className="decoration-sparkle" />
                  ))}
                </div>
                <div className="base-decoration" />
              </div>

              <div className="cake-plate" />
            </div>

            {/* Message after blowing candles */}
            {!candlesLit && (
              <div className="celebration-section">
                {/* Clapping emojis */}
                <div className="clapping-emojis">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="clap-emoji"
                      style={{
                        left: `${10 + (i % 6) * 15}%`,
                        top: `${i < 6 ? -20 : 100}px`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      👏
                    </div>
                  ))}
                </div>

                <p className="wish-made-title">🎊 Wish Made! 🎊</p>
                <p className="wish-made-text">May all your dreams come true!</p>
                <div className="clap-row">
                  <span className="clap">👏</span>
                  <span className="clap" style={{ animationDelay: '0.1s' }}>👏</span>
                  <span className="clap" style={{ animationDelay: '0.2s' }}>👏</span>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                  <button onClick={() => setCandlesLit(true)} className="action-btn relight">
                    Light Candles Again ✨
                  </button>

                  {!cakeCut && (
                    <button onClick={() => setCakeCut(true)} className="action-btn cut">
                      <Scissors className="scissors-icon" />
                      Cut the Cake 🍰
                    </button>
                  )}

                  {cakeCut && (
                    <button onClick={() => setCakeCut(false)} className="action-btn reset">
                      Reset Cake 🎂
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthdayWishPage;


