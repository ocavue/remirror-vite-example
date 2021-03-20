set -ex

cd $(dirname $0)


echo "" > .env
echo "VITE_GIT_COMMIT_SHA=$(git rev-parse HEAD)" >> .env
echo "VITE_BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")" >> .env

# vercel --prod
