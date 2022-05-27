import {useState, useEffect, } from 'react';

import Carousel from './Carousel';

import {getCommonCardsService, getMainPageMonsterCardsService, getMainPageSpellCardsService, getMainPageTrapCardsService, } from '../../services/cardsServices';

const Home = () => {

  const [commonCards, setCommonCards] = useState([]);
  const [monsterCards, setMonsterCards] = useState([]);
  const [spellCards, setSpellCards] = useState([]);
  const [trapCards, setTrapCards] = useState([]);

  useEffect(() => {
    getCommonCards();
    getMonsterCards();
    getSpellCards();
    getTrapCards();
  }, []);

  const getCommonCards = async () => {
    try {
      const commonCardsResponse = await getCommonCardsService();
      const cards = commonCardsResponse.map(res => res.data?.data[0]);
      setCommonCards(cards);
    } catch (e) {
      console.log(e);
    }
  }

  const getMonsterCards = async () => {
    try {
      const data = await getMainPageMonsterCardsService();
      setMonsterCards(data.data);
    } catch (e) {
      console.log(e);
    }
  }

  const getSpellCards = async () => {
    try {
      const data = await getMainPageSpellCardsService();
      setSpellCards(data.data);
    } catch (e) {
      console.log(e);
    }
  }

  const getTrapCards = async () => {
    try {
      const data = await getMainPageTrapCardsService();
      setTrapCards(data.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <h2>
        Las más populares
      </h2>
      <Carousel cards={commonCards} />
      <h2>
        Los mejores monstruos
      </h2>
      <Carousel cards={monsterCards} />
      <h2>
        Las mejores cartas mágicas
      </h2>
      <Carousel cards={spellCards} />
      <h2>
        Las mejores cartas trampa
      </h2>
      <Carousel cards={trapCards} />
    </>
  )
}

export default Home;
