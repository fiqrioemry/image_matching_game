import React, { useState, useEffect } from "react";
import Lion from "../assets/lion.png";
import Cat from "../assets/cat.png";
import Crocodile from "../assets/crocodile.png";
import Elephant from "../assets/elephant.png";
import Monkey from "../assets/monkey.png";
import Eagle from "../assets/eagle.png";
import Turtle from "../assets/turtle.png";
import Dog from "../assets/dog.png";

// Daftar gambar untuk kartu
const images = [Lion, Cat, Monkey, Elephant, Crocodile, Eagle, Turtle, Dog];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (clickCount > 0) {
      const perfectClick = cards.length;
      const newScore = Math.min((perfectClick / clickCount) * 100, 100);
      setScore(newScore);
    }
  }, [clickCount, cards.length]);

  // Mengacak dan mengatur kartu
  useEffect(() => {
    const shuffledCards = [...images, ...images].sort(
      () => Math.random() - 0.25
    );
    setCards(
      shuffledCards.map((image, index) => ({
        id: index,
        image,
        flipped: false,
      }))
    );
  }, []);

  const handleCardClick = (index) => {
    setClickCount(clickCount + 1);
    if (flippedCards.length < 2 && !cards[index].flipped) {
      const newCards = [...cards];
      newCards[index].flipped = true;
      setCards(newCards);
      setFlippedCards([...flippedCards, newCards[index]]);

      if (flippedCards.length === 1) {
        checkMatch(newCards[index], newCards[flippedCards[0].id]);
      }
    }
  };

  const checkMatch = (card1, card2) => {
    if (card1.image === card2.image) {
      setMatchedCards([...matchedCards, card1.image]);
      if (matchedCards.length + 1 === images.length) {
        setGameEnded(true);
      }
    } else {
      setTimeout(() => {
        const newCards = [...cards];
        newCards[card1.id].flipped = false;
        newCards[card2.id].flipped = false;
        setCards(newCards);
      }, 1000);
    }
    setFlippedCards([]);
  };

  return (
    <div className="bg-gray-100 overflow-hidden h-screen">
      <div className="flex flex-col justiy-center items-center  container mx-auto py-12 ">
        <h1 className="text-2xl font-bold mb-5">Memory Matching Game</h1>
        <div className="grid grid-cols-4 gap-4 mb-4 max-w-md">
          {cards.map((card, index) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(index)}
              className={`md:w-24 md:h-24 h-20 w-20 flex items-center justify-center border rounded-lg cursor-pointer ${
                card.flipped || matchedCards.includes(card.image)
                  ? "bg-white"
                  : "bg-blue-500"
              }`}
            >
              {card.flipped || matchedCards.includes(card.image) ? (
                <img
                  src={card.image}
                  alt="card"
                  className="w-full h-full rounded-lg"
                />
              ) : (
                <div className="text-white text-3xl">?</div>
              )}
            </div>
          ))}
        </div>
        {gameEnded && (
          <div className="mt-5 text-lg font-bold">
            Congratulations! You matched all cards!
          </div>
        )}
        <div className="max-w-md  w-full px-5 md:px-2 ">
          <div className="py-4 px-4 border rounded-md bg-blue-500 w-full text-white">
            <div className="flex items-center">
              <div className="w-1/2">click count</div>
              <div className="w-1/2">: {clickCount}</div>
            </div>
            <div className="flex items-center">
              <div className="w-1/2">Total Score</div>
              <div className="w-1/2">: {score.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
