const br = '\n\n';
const line = '----------------------------';

function timeSince(time, precision) {
	const ms = new Date().getTime() - time;
	const s = (ms / 1000).toFixed(precision);
	const m = (s / 60).toFixed(precision);
	const h = (m / 60).toFixed(precision);

	return { ms, s, m, h };
}

function findPrimes({
	limit = 999,
	start = 1,
	timePrecision = 3,
	log = false,
	logAllOnFinish = false
} = {}) {
	const startTime = new Date().getTime();
	const primes = [];
	let _start = start;

	if (_start === 1) {
		_start = 2;
		primes.push(1);
	}

	for (let i = _start; i < limit; i++) {
		let prime = true;

		for (let j = 2; j < i; j++) {

			if (i % j === 0) {
				prime = false;
				break;
			}
		}

		if (prime) {
			primes.push(i);

			if (log) {
				const message = [
					line,
					br,
					`Found new prime: ${i}`,
					br,
					`Prime count: ${primes.length}`,
					br
				];
				console.log(...message);
			}
		}
	}

	const completionMessage = [
		`Completed in ${timeSince(startTime, timePrecision).s}s`,
		'\n\n',
		`Found ${primes.length} primes from ${start} to ${limit}`,
		'\n\n'
	];

	if (logAllOnFinish) {
		console.log('Complete. Primes are as follows:');
		primes.map(console.log);
		completionMessage.push('Full list:');
		completionMessage.push(primes);
	}

	console.log(...completionMessage);
}

module.exports = {
	findPrimes
};
