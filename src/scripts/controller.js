export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.getItemsFromLS();
    this.view.initVehicles(this.model.vehicles);
    this.view.initCosts(this.model.costs);

    this.view.on('addVehicles', this.addVehicle.bind(this));
    this.view.on('addCost', this.addCost.bind(this));
  }

  addVehicle(vehicle) {
    this.model.addVehicle(vehicle);
    this.view.renderVehicle(vehicle);
  }

  addCost(cost) {
    this.model.addCost(cost);
    this.view.renderCost(cost);
  }
}
