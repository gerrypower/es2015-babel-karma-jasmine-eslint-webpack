var testsContext = require.context('./src', true, /^.*spec\.js$/i);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('./src', true, /^(?!.*spec\.js$).*\.js$/i);
srcContext.keys().forEach(srcContext);
