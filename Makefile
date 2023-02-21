install:
	npm ci

brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-games:
	node bin/brain-games.js

brain-gcd:
	node bin/brain-gcd.js

brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .