# Material Frame
### Pre-alpha
#### Version 0.1.6
Matrerial Frame is a material design framework built using vanilla HTML, CSS and JS. Material Frame focuses on ease of use for both the developer and the user of the final product.  Material Frame is currently in pre-alpha and thus is far from complete. This framework will always reflect the very latest in the material design guidelines. Material Frame treats the material design guidelines as rules, not guidelines. Anything you see within this framework can and is likely to change, hopefully these changes are for the better.

Material Frame is _not_ the final name, this name will be changed in the future whenever a name is thought of, until then the repo and everything to do with this framework will use the name 'Material Frame'.

Please make sure to report and bugs that you find, or fix the bugs yourself and make a pull request. Feel free to add new components to Material Frame, then make a pull request.

Currently there are 3 components which are considered ready for use:
- Drawer
- Elevation
- Toolbar

Work in progress components:
- Input
- Lists
- Tabs
- Ripples
- 

## Usage

Using Material Frame is pretty simple. Afer adding it to your project, just open up the file for each component you want to use. There will be a long HTML comment telling you how to use that component. 

For example, I want to use the Drawer component. All I have to do is open up drawer.html, and read the instructions that are written in the first lines of the file.

## Notes
This project uses the SCSS variant of SASS. The compiled CSS is not included within this repository and must be compiled yourself through your tool of choice.
There are various ways to compile SCSS and SASS into standard CSS3.

### Applications/Extensions
* <a href="https://github.com/jasonsanjose/brackets-sass">Brackets SASS auto compiler</a> (free, open source)
* <a href="http://incident57.com/codekit/">CodeKit</a> (paid)(OSX)
* <a href="http://compass.kkbox.com/">Compass</a> (paid, open source) (OSX, Windows, Linux)
* <a href="http://hammerformac.com/">Hammer</a> (paid) (OSX)
* <a href="http://koala-app.com/">Koala</a> (open source) (OSX, Windows, Linux)
* <a href="http://livereload.com/">LiveReload</a> (paid, open source) (OSX, Windows)
* <a href="http://mixture.io/">Mixture</a> (free) (OSX, Windows)
* <a href="https://prepros.io/">Prepros</a> (paid) (OSX, Windows, Linux)
* <a href="http://mhs.github.io/scout-app/">Scout</a> (open source) (OSX, Windows)

### Command line

#### Linux
If you're using a distribution of Linux, you'll need to install Ruby first. You can install Ruby through the apt package manager, rbenv, or rvm.
`sudo su -c "gem install sass"`
#### Windows
Before you start using Sass you will need to install Ruby. The fastest way to get Ruby on your Windows computer is to use Ruby Installer. It's a single-click installer that will get everything set up for you super fast.
http://rubyinstaller.org/

The installer will also install a Ruby command line powershell application that will let you use the Ruby libraries.

#### Mac
If you prefer the command line over an application then getting Sass set up is a fairly quick process. Sass has a Ruby dependency but if you're using a Mac, congratulations, Ruby comes pre-installed.

#### Install Sass
Here's the quickest way we've found to start using Sass by using the command line:

1. <b>Open your Terminal or Command Prompt</b>. On the Mac the Terminal.app comes installed by default. It's located in your "Utilities" folder. On Windows, run `cmd`.

2. <b>Install Sass.</b> Ruby uses Gems to manage its various packages of code like Sass. In your open terminal window type:
`gem install sass`

This will install Sass and any dependencies for you. It's pretty magical. If you get an error message then it's likely you will need to use the sudo command to install the Sass gem. It would look like:
`sudo gem install sass`

3. <b>Double-check</b>. You should now have Sass installed, but it never hurts to double-check. In your terminal application you can type:
`sass -v`

It should return Sass 3.4.15 (Selective Steve). Congratulations! You've successfully installed Sass.
