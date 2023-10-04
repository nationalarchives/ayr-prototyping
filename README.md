# da-ayr-prototyping

## Quick start set up
### What you'll need...
1. A code editor [Studio Visual Code](https://code.visualstudio.com/) is recommended, free and has a built-in terminal window).
2. Access to a publishing host (to show and share a public prototype link, AYR uses [Heroku](https://www.heroku.com/home) which is a paid service.
3. An undersanding of the [GDS design system](https://design-system.service.gov.uk)

### Terminal instructions... /

Firsty, head over to [GDS getting started with advanced prototype kit](https://prototype-kit.service.gov.uk/docs/install/getting-started-advanced).
Follow the instructions.

Should you run into trouble creating a prototype for instance an error is shown "missing script: 'dev" is displayed, please follow these detailed instructions written to overcome thiS issue.

### What you'll need...
1.  Make sure that you have at least __Node.js LTS version 18.x.x__ running on your pc/mac.
2. Create a directory on your pc/mac to contain the prototype.
3. In the terminal, path to your local prototype directory. e.g. `name@MacBook-Pro ayr-prototype`
4. Run `npx govuk-prototype-kit create` This downloads the GDS prototype kit into your chosen directory.
5. You may need to enter your GitHub passphase. Enter this if prompted.
6. Run `npm run dev`
7. Finally after this has run, you should see two localhost links appear in ther termiinal:

    *You can manage your prototype at:*
    <ins>http://localhost:3000/manage-prototype<ins>

    *The Prototype Kit is now running at:*
    <ins>http://localhost:3000/manage-prototype<ins>



## Components
AYR prototypes principally uses the GDS component library.

However, there may also be some use of non-GDS components from the TNA and TDR component libraries:

[TNA Components GitHub repo](https://github.com/nationalarchives/tna-components)

[TNA Components GitHub repo](https://github.com/nationalarchives/tdr-components)




Any usage of non-GDS components will be documented on the confluence page [Design component used on AYR](https://national-archives.atlassian.net/l/cp/A6Gqw8Nb)

---
