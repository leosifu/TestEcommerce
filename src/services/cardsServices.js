import clientAxios from '../config/axios';
import axios from 'axios';

export const getCardsService = async () => {
  const {data} = await clientAxios().get('/cardinfo.php?num=5&offset=0');
  return data;
}

export const getCommonCardsService = async () => {
  const response = await axios.all([
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
  return response;
}

export const getMainPageMonsterCardsService = async () => {
  const {data} = await clientAxios().get('/cardinfo.php?type=Normal Monster&num=10&offset=0');
  return data;
}

export const getMainPageSpellCardsService = async () => {
  const {data} = await clientAxios().get('/cardinfo.php?type=spell%20card&num=10&offset=0');
  return data;
}

export const getMainPageTrapCardsService = async () => {
  const {data} = await clientAxios().get('/cardinfo.php?type=trap%20card&num=10&offset=0');
  return data;
}
