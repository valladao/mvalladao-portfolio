# Manoel Valladão - Shopify Development Portfolio

This repo contains the code used to generate my web developer portfolio. I decided to create that as a kind of e-commerce, because in the end, it is all about it.

## Project Structure

### Gulp Automation for Shopify Project

This project uses Gulp to automate the processing of CSS, JavaScript, and Liquid files, ensuring efficient management and deployment to your Shopify store.

#### Folder Structure

- **Source Folders**:
  - **Styles**: `styles/`
    - Contains SCSS files organized into subfolders.
    - Each subfolder contains an `index.scss` file that imports other SCSS partials.
    - Example: `styles/header/index.scss` imports `styles/header/_variables.scss`.
  - **Scripts**: `scripts/`
    - Contains TypeScript files organized into subfolders.
    - Each subfolder contains an `index.ts` file that imports other TypeScript modules.
    - Example: `scripts/header/index.ts` imports `scripts/header/util.ts`.
  - **Snippets Source**: `snippets-src/`
    - Contains `.liquid` files organized into subfolders.
    - The subfolder structure is mirrored in the output filenames by combining the directory names with the filename.
    - Special Handling for `index.liquid`: Files named `index.liquid` will use only the folder name for the output filename, without the `index` part.
    - Example: `snippets-src/component/animated-name.liquid` generates `snippets/component-animated-name.liquid`.
    - Example: `snippets-src/header/index.liquid` generates `snippets/header.liquid`.

#### Output

- **Output Folders**:
  - **Assets**: `assets/`
    - Compiled and minified CSS files are placed here.
    - Compiled and minified JavaScript files are also placed here with a `.js.liquid` extension.
  - **Snippets**: `snippets/`
    - Processed `.liquid` files from `snippets-src` are output here.
    - The full path structure is reflected in the filename by combining subfolder names with the file's basename.
    - Files named `index.liquid` generate filenames based only on the folder name.
    - Example: `snippets-src/component/animated-name.liquid` generates `snippets/component-animated-name.liquid`.
    - Example: `snippets-src/header/index.liquid` generates `snippets/header.liquid`.

#### Task Descriptions

- **Styles Task**:

  - Compiles SCSS files from `styles/**/index.scss` into CSS.
  - Minifies the CSS and outputs it to the `assets/` folder with the corresponding subfolder name.
  - Example: `styles/header/index.scss` generates `assets/header.css`.

- **Scripts Task**:

  - Compiles TypeScript files from `scripts/**/index.ts` into JavaScript.
  - Minifies the JavaScript and outputs it to the `assets/` folder with a `.js.liquid` extension.
  - Example: `scripts/header/index.ts` generates `assets/header.js.liquid`.

- **Snippets Task**:

  - Processes Liquid files from `snippets-src/`.
  - Combines subfolder names with the file's basename to create a flattened but descriptive filename.
  - Special handling for `index.liquid`: If a file is named `index.liquid`, only the folder name will be used for the output filename.
  - Outputs to the `snippets/` folder.
  - Example: `snippets-src/component/animated-name.liquid` generates `snippets/component-animated-name.liquid`.
  - Example: `snippets-src/header/index.liquid` generates `snippets/header.liquid`.

- **Critical CSS Task**:
  - Compiles SCSS files from `styles/critical-css/`.
  - Minifies the CSS and outputs it to the `snippets/` folder with the suffix `-critical-css.liquid`.
  - Example: `styles/critical-css/hero.scss` generates `snippets/hero-critical-css.liquid`.

#### Usage

- **Development Mode**:

  - Run `npm run dev` to start Gulp in watch mode and the Shopify development server simultaneously.
  - Gulp will watch for changes in your source files, automatically recompile them, and output the results to the appropriate folders.

- **Example Commands**:
  - `npm run dev`: Runs Gulp in watch mode and starts Shopify development server.

This setup streamlines the development workflow, ensuring that assets are properly compiled, optimized, and ready for deployment to Shopify stores.

## Shopify Sections

### Static Sections

| Sections | Description                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------- |
| Header   | This static section you use to set everything that you want to theme header. That will be in all pages. |

### Dynamic Sections

| Sections            | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| Banner              | The header of the page. Plan is to be similar to a CV header |
| Featured Collection | A section to expose all products inside a collection         |

**Store password:** pawpre
