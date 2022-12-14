const scanner = require('sonarqube-scanner')

scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'sqp_76e65ac78dbb62c7c9fbeeadba2a8ec7e39998fd',
    options: {
      'sonar.projectKey': 'comuna.brilhante',
      'sonar.projectName': 'Comuna Brilhante',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.testExecutionReportPaths': 'coverage/xml-reports/sonar.xml',
      'sonar.sources': 'src',
      'sonar.tests': 'cypress/integration'
    }
  },
  () => process.exit()
);

// sonar-scanner.bat -D"sonar.projectKey=comuna.brilhante" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=sqp_76e65ac78dbb62c7c9fbeeadba2a8ec7e39998fd"