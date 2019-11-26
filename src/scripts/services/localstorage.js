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

      if (serializedState === null) {
        localStorage.setItem(this.prefix + key, '[]');
        return;
      }
      // eslint-disable-next-line consistent-return
      return JSON.parse(serializedState);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Get state error: ', err);
    }
  }

  set(key, value) {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(this.prefix + key, serializedState);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Set state error: ', err);
    }
  }
}
const LS = new LocalStorage();

export default LS;
