# Development server
serve:
	cd my-site && hugo mod tidy
	cd my-site && hugo server --logLevel debug --disableFastRender -p 1313

# Production build
build:
	cd my-site && hugo mod tidy
	cd my-site && hugo --minify --environment production

