fetch("../../../assets/data/apartments.json")
  .then((response) => response.json())
  .then((data) => {
    const targetData = data.filter((item) => item.number == "888");
    console.log(targetData);
  })
  .catch((error) => console.error(error));
