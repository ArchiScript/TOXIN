export class DataFetcher {
  constructor(mode, filters = {}) {
    this.mode = mode;
    this.filters = filters;
  }

  get isTest() {
    return this.mode === "test";
  }
  getTestData() {
    let data = [];
    for (let i = 1; i < 176; i++) {
      data.push(i);
    }
    return data;
  }
  async #getDataPromise() {
    try {
      const response = await fetch("assets/data/apartments.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return this.applyFilters(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
  updateFilters(updatedFilters) {
    this.filters = updatedFilters;
  }
  applyFilters(data) {
    const filteredData = data.filter((item) => {
      for (let key in this.filters) {
        const filterValue = this.filters[key];
        const itemValue = item[key];
        // Check if the filter value is an object representing a range
        if (
          typeof filterValue === "object" &&
          filterValue.hasOwnProperty("min") &&
          filterValue.hasOwnProperty("max")
        ) {
          const min = filterValue.min;
          const max = filterValue.max;

          // Check if the item value falls within the range
          if (itemValue < min || itemValue > max) {
            return false;
          }
        } else {
          if (itemValue !== filterValue) {
            return false;
          }
        }
      }
      return true;
    });
    return filteredData;
  }

  async logData() {
    try {
      const filteredData = await this.#getDataPromise();
      console.log(filteredData);
    } catch (error) {
      console.error("Error logging filtered data:", error);
    }
  }

  async getData() {
    try {
      const filteredData = await this.#getDataPromise();
      return filteredData;
    } catch (error) {
      console.error("Error fetching and filtering data:", error);
      throw error; // Re-throw the error to propagate it to the caller
    }
  }
}
