export default eventHandler((event) => {
  const { name } = getQuery(event);

  if (!name) {
    return {
      statusCode: 400,
      message: "Please provide a name",
    };
  }

  return {
    statusCode: 200,
    message: "Hello, " + name + "!",
  };
});
