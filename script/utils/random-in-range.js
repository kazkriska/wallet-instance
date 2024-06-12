module.exports = (min, max, decimals = false) => {
    Math.floor(Math.random() * 100);
    return decimals
      ? parseFloat(Math.random() * (max - min) + min).toFixed(2)
      : Math.floor(Math.random() * (max - min) + min);
  };