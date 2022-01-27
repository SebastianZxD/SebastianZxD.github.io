function handlerSubmit(culo) {
  culo.preventDefault();
  // const key = culo.target[0].name;
  // const value = culo.target[0].value;
  // console.log("key: ", key, " value: ", value);
  const arr = Array.from(culo.target);
  // console.log("array: ", arr);
  arr.forEach((element) => {
    console.log("key: ", element.name, " value: ", element.value);
  });
}
// Max PEINANDO a la belleza.