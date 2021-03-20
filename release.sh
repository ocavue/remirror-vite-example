set -ex

cd $(dirname $0)

remirror_version=$(cat package.json | egrep -o '0.0.0-pr877[.0-9]*' | sort | uniq)

echo "" > .env
echo "VITE_GIT_COMMIT_SHA=$(git rev-parse HEAD)" >> .env
echo "VITE_BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ")" >> .env
echo "VITE_REMIRROR_VERSION=$remirror_version" >> .env

vercel --prod
