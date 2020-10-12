# Prime Finder

Find all prime numbers in a given range.

### Usage

```bash
npm install prime-finder
```

```javascript
import { findPrimes } from 'prime-finder';

findPrimes({ limit: 1000000000, log: true, timePrecision: 2 });
```

### Options
Options should be passed as an object to `findPrimes`.

* `limit` - upper bound of the range. Default = 999
* `start` - lower bound of the range. Default = 1
* `timePrecision` - number of decimal places to show in time stamps. Default = 3
* `log` - log a console message each time a new prime is found. Default = false
* `logAllOnFish` - iterates through all primes found upon completion. Default = false

Note: logs will slow down how fast new numbers are discovered.