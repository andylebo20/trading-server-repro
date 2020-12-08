async function awaitTimeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { awaitTimeout };
