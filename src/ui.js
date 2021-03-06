/* global module */

import '@babel/polyfill';
import * as T from 'terrific';
import $ from 'jquery';
import { hot } from '@gondel/plugin-hot';
import 'slick-carousel';


// This because we need styles on shared
import './shared/base/security/js/security';
import './shared/base/reset/css/reset.scss';
import './shared/base/code-prettify/css/sunburst.scss';
import './shared/utils/grid/css/grid.scss';
import './shared/base/document/css/document.scss';
import './shared/base/webfonts/css/webfont-gaegu.scss';
import './shared/base/webfonts/css/webfont-playfair-display.scss';
import './shared/utils/colors2/css/colors2.scss';

// This because we need styles on views
import './views/css/aboutme.scss';
import './views/css/work.scss';
import './views/css/index.scss';
import './views/css/project-container.scss';
import './views/css/prettify.scss'



import './patterns/molecules/navigation';
import './patterns/molecules/hamburger';
import './patterns/molecules/paragraph';
import './patterns/molecules/footer';
import './patterns/molecules/slider';
import './patterns/atoms/heading';
import './patterns/atoms/image';
import './patterns/atoms/button';
import './patterns/atoms/list-items';
import './patterns/atoms/spacer';




hot(module);

// custom code
console.log("I'm from the entry point ui"); // eslint-disable-line

// terrificjs
$(() => {
	const application = new T.Application();
	application.registerModules();
	application.start();
});