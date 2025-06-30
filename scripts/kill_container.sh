source /opt/movie_project/.env
set -e

cd $SERVERDIR

docker-compose down || true