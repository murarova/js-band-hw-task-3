import v4 from 'uuid/v4';
import LS from './services/localstorage';

export default class Model {
  constructor(vehicles = [], costs = []) {
    this.vehicles = vehicles;
    this.costs = costs;
  }

  getItemsFromLS() {
    this.vehicles = LS.get('vehicles') || [];
    this.costs = LS.get('costs') || [];
  }

  addVehicle(vehicle) {
    const newVehicle = {
      id: v4(),
      ...vehicle,
    };
    this.vehicles.push(newVehicle);
    LS.set('vehicles', this.vehicles);
    return newVehicle;
  }

  addCost(cost) {
    const newCost = {
      ...cost,
    };
    this.costs.push(newCost);
    LS.set('costs', this.costs);
    return newCost;
  }
}
