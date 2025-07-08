source /opt/test_movie/.env
set -e

cd $SERVERDIR

docker-compose down || true