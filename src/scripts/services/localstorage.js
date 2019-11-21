class LocalStorage {
  constructor() {
    if (typeof LocalStorage.instance === 'object') {
      return LocalStorage.instance;
    }
    this.prefix = 'JS-Band-';
    LocalStorage.instance = this;
    return this;
  }

  get(key) {
    try {
      const serializedState = localStorage.getItem(this.prefix + key);

      if(serializedState === null) {
        localStorage.setItem(this.prefix + key, [])
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Get state error: ', err);
    }
  }

  set(key, value) {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(this.prefix + key, serializedState);
    } catch (err) {
      console.error('Set state error: ', err);
    }
  }
}
const LS = new LocalStorage();

export default LS;
