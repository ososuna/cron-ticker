const { syncDb } = require("../../tasks/sync-db");

describe('Sync DB tests', () => {
  test('Should execute the process 2 times', () => {
    syncDb();
    const times = syncDb();
    console.log('Called syncDb() ', times);
    expect(times).toBe(2);
  });
});
