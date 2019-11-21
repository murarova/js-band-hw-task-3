import Ship from '../vehicles/ship';
import Truck from '../vehicles/truck';

class VehicleFactory {
  create(type, ...rest) {
    if (type === 'Ship') return new Ship(type, ...rest);
    if (type === 'Truck') return new Truck(type, ...rest);
  }
}

const vehicleFactory = new VehicleFactory();

export default vehicleFactory;
