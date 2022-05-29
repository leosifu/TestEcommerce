import clientAxios from '../config/axios';
import axios from 'axios';

export const getCommonCardsService = async () => {
  return axios.all([
    clientAxios().get('/cardinfo.php?name=Dark Magician'),
    clientAxios().get('/cardinfo.php?name=Blue-Eyes White Dragon'),
    clientAxios().get('/cardinfo.php?name=Baby Dragon'),
    clientAxios().get('/cardinfo.php?name=Red-Eyes Black Dragon'),
    clientAxios().get('/cardinfo.php?name=Kuriboh'),
    clientAxios().get('/cardinfo.php?name=Summoned Skull'),
    clientAxios().get('/cardinfo.php?name=Buster Blader'),
    clientAxios().get('/cardinfo.php?name=Slifer the Sky Dragon'),
    clientAxios().get('/cardinfo.php?name=Obelisk the Tormentor'),
    clientAxios().get('/cardinfo.php?name=The Winged Dragon of Ra'),
  ]);
}

export const getMainPageMonsterCardsService = async () => {
  return clientAxios().get('/cardinfo.php?type=Normal Monster&num=10&offset=0');
}

export const getMainPageSpellCardsService = async () => {
  return clientAxios().get('/cardinfo.php?type=spell%20card&num=10&offset=0');
}

export const getMainPageTrapCardsService = async () => {
  return clientAxios().get('/cardinfo.php?type=trap%20card&num=10&offset=0');
}

export const getCardByNameService = async (cardName) => {
  return clientAxios().get(`/cardinfo.php?name=${cardName}`);
}
