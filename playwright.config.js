const reporter = [["list"]];

if (process.env.CI) {
  reporter.push(["json", { outputFile: `report.json` }]);
}

module.exports = {
  testDir: './tests/',
  timeout: 40000,
  retries: 3,
  reporter,
};
