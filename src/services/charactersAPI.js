import axios from 'axios';
import 'dotenv/config';

const DEFAULT_TIMEOUT = 30000;
class CharactersService {
  constructor({
    url = process.env.REACT_APP_HAWKINS_URL || process.env.REACT_APP_UPSIDEDOWN_URL,
    timeout = DEFAULT_TIMEOUT }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
