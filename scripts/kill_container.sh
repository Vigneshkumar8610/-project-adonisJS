source /opt/sample_project/.env
set -e

cd $SERVERDIR

docker-compose down || true