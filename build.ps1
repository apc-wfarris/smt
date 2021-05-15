$Env:ELEVENTY_ENV = "PRODUCTION"
npx @11ty/eleventy --input=src

$Env:ELEVENTY_ENV = $null