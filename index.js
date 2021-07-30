const core = require('@actions/core');
const trailers = require('./trailers');

async function run() {
    try {
	core.setOutput("trailers", trailers.parse(core.getInput('message')))
    } catch (error) {
	core.setFailed(error.message);
    }
}

run();
