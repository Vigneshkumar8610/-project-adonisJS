source /opt/test_movie/.env
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin $ECRLOGIN

