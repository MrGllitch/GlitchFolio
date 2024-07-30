import { writable } from 'svelte/store';
import { locale as i18nLocale } from 'svelte-i18n';

export const locale = writable('en');

locale.subscribe((value) => {
	i18nLocale.set(value);
});
