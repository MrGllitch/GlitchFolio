import { addMessages, init, locale } from 'svelte-i18n';

import cs from '../locale/cs.json';
import en from '../locale/en.json';

addMessages('en', en);
addMessages('cs', cs);

init({
	fallbackLocale: 'cs',
	initialLocale: 'cs'
});
