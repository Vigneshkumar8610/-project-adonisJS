source /opt/movie_project/.env
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin $ECRLOGIN

