**Installation of NodeJS, NPM, Bower, Grunt, Yo and AngularJS**

# Install NodeJS and NPM
sudo apt-get install nodejs

# Check Installation
node -v
npm -v

# Prevent SUDO and access problems
1.
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

2.
rm ~/.profile
touch ~/.profile

3. In /.profile copy/paste next line
export PATH=~/.npm-global/bin:$PATH

4.
source ~/.profile

5.
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config

# Init npm to override package.json
npm init

# Install npm packages globally
npm i -g bower
npm i -g yo
npm i -g grunt-cli
npm i grunt --save-dev
npm i -g generator-angular

# Create angular project
mkdir ~/Project/Angular/first-app
cd ~/Project/Angular/first-app
yo angular

# Test with grunt
grunt test
