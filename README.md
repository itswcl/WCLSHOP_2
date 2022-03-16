# WCLSHOP_2
## Preview
![WCLSHOP (1)](https://user-images.githubusercontent.com/57115661/157816075-fe6fee9c-89c0-41cf-ac60-5f36e3514e1d.gif)

## AWS instance
- choose Ubuntu18.04
![1](https://user-images.githubusercontent.com/57115661/158041723-19438094-0a4a-428d-96e0-6c884d9f1ee4.jpg)

- choose free tier
![2](https://user-images.githubusercontent.com/57115661/158041724-d7e9e4cc-6fc8-432b-a414-5d71d310adae.jpg)

- go to step 6 configure security group - update SSH, My IP / add rules for http & https, Anywhere
![3](https://user-images.githubusercontent.com/57115661/158041726-8e0543dd-f5bd-4eb0-9cfd-307abb85dcf0.jpg)

- launch instances with key
![4](https://user-images.githubusercontent.com/57115661/158041728-fc10c881-430d-42a9-932e-4f15257cb5b1.jpg)

## AWS connect
- click connect on dashboard and go SSH client copy 3 and 4 information
![Screen Shot 2022-03-12 at 6 17 29 PM](https://user-images.githubusercontent.com/57115661/158042102-4febe594-2d4d-49d7-b8ea-6421d28ac36d.jpg)
- go local terminal paste information as below
  - chmod 400 <keyname.pem>
    1. from SSH client bullet 3
    2. make sure you are on key directory to run command
  - ssh -i <"keyname.pem" ubuntu@ec2-XXX-XXX-XXX-XXX.compute-1.amazonaws.com>
    1.  from SSH client Example

## update/install software version
- sudo apt update
- sudo apt install nodejs npm nginx git -y
- nodejs -v
# this should print out version 10.19.0
- curl -sL https://deb.nodesource.com/setup_lts.x -o nodesource_setup.sh
- sudo bash nodesource_setup.sh
- sudo apt install nodejs -y
node -v
# this should now print out version 14.7.0 or newer
- sudo apt install build-essential

## install code on instance
- git clone https://github.com/your_github_username/MERN-Deployment.git
- export repoName=MERN-Deployment
- echo MERN-Deployment

## set up frontend - react
- cd ~/MERN-Deployment/client
- sudo rm -rf /var/www/html 
- sudo mv build /var/www/html
- sudo service nginx restart
- fix fronend route start with /
  - sudo grep -rl localhost /var/www/html | xargs sed -i 's/http:\/\/localhost:8000//g'

## set up backend and mongoDB
- cd ~/MERN-Deployment/server
- npm i
-  wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
-  echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
-  sudo apt update
-  sudo apt install -y mongodb-org
-  sudo service mongod start
-  service mongod status
-  sudo rm /etc/nginx/sites-available/default
-  sudo vim /etc/nginx/sites-available/default
    - import the code below in lines
      - MERN-Deployment Configuration 1-16-2020
        server {
            listen 80 default_server;
            listen [::]:80 default_server;
            root /var/www/html;
            index index.html index.htm index.nginx-debian.html;
            server_name MERN-Deployment;
            location /api {
                proxy_pass http://localhost:8000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;    
            }
            location / {
                try_files $uri $uri/ =404;
            }
            error_page 404 /index.html;
        }
