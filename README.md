# Conan Conquering Calculator

A calculator for figuring out how to craft and build things quickly in [Conan
Exiles](https://www.conanexiles.com/).

This software is still in the early stages. Bear with the very small amount of
data available to search across, and the extremely basic UI for now.

This calculator requires ECMAScript 2015, so you have to use a good, modern
browser to run it. (Internet Explorer won't work.)

## Demo

You can interact with a live demo here: https://w0rp.github.io/conan-conquering-calculator-demo/

At the moment, this project only contains information on how to build raiding
materials, and some T3 building pieces, plus some others. Here are some example
searches you can try which should yield decent results:

* `300 explosive`
* `2 trebuchet` (Uses new 30 minute build times for frames and arms)
* `400 black ice wedge foundation`

Gather times are not currently based on any real tests of how long it takes to
gather something, and some suggested recipes may be suboptimal, but any crafting
times should be expected to be accurate, barring any patches not yet taken into
account, and the thrall adjustments should work.

Getting good results for search terms is incredibly hard. Try different
characters until you get what you want, and avoid plural forms of words.

## Installation

For setting up the calculator, you'll need to do the following.

1. Run `yarn` to install all of the npm packages.
2. Run `yarn run build` to build the web pages in the `dist` directory.
3. Either open `dist/index.html` locally, or host the files on any webserver.

### Easy Installation for Less Technical Windows Users

These instructions are provided for running the calculator for Windows users who
aren't developers and just want an easy way to try it offline on their machine.

1. Download and install an LTS 64-bit version of NodeJS from here:
   https://nodejs.org/en/download/
2. When the NodeJS installer runs, you do not have to tick "automatically
   install the necessary tools," you can untick that.
3. Download and install Yarn from here: https://yarnpkg.com/latest.msi
4. Download a ZIP of this project from here: https://github.com/w0rp/conan-conquering-calculator/archive/master.zip
5. Extract the ZIP anywhere you want.
6. Navigate to the directory in a shell. An easy way is to hold shift and right
   click while inside the directory where you extract the ZIP, and click "Open
   PowerShell here." If you do not have PowerShell, use CMD, which you can
   figure out how to use.
7. Once in the shell in the right directory, run the commands explained above.

Hopefully this experience will show people who aren't developers how easy it is
to get started with building a web project.
