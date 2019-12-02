## Docker Compose + MongoDB + Node + Apollo + GraphQL
This is a bootstrap/starter kit for new projects to run on MongoDB, Node.js and GraphQL.

---
### Setup 
##### 1. Install Node.js
Standard installation (Windows/macOS/Linux): https://nodejs.org/en/download/
or
Recommended installation via nvm (macOS/Linux) https://github.com/nvm-sh/nvm
  ```
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
  nvm install --lts
  ```
     
##### 2. Install Docker https://docs.docker.com/install/
For Ubuntu, run:
```
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

##### 3. Install Docker Compose https://docs.docker.com/compose/install/
For Ubuntu/Linux, run:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

##### 4. Clone this repo
```git clone git@github.com:nasrulmukasim/docker-mongodb-node-graphql.git ```

---
### Usage

##### Set up environment variables
```
cp .env-sample .env
```
Then edit the .env file to assign the environment variables

##### Run via makefile
Build the docker image and start all containers in background
```make```
Start containers
``` make start```
Stop and remove containers
``` make stop```

##### or run directly in docker compose as a daemon
```docker-compose up -d```

---

### Additional DB Setup [optional]

Create your own .js file in the `./mongo-init-scripts` folder

E.g.
```
db.createUser({
  user: appUser
  pwd: 5ecurepa55w0rd!
  roles: [
    {
      role: 'readWrite',
      db: 'app'
    }
  ]
});
```

---
### Additional Makefile commands
**Reset the database (:warning: **Warning!** this deletes all db data)**
```make reset-mongo-db```

**Remove node modules installed in project folder**
```make remove-node-modules```

**Reset everything** (:warning: **Warning!** this deletes all db data, changes to your repository and node modules)
```make reset-all```
