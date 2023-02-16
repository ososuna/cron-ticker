let times = 0;

const syncDb = () => {
  times++;
  console.log('tick every 5 seconds', times);
  return times;
}

module.exports = { syncDb };
