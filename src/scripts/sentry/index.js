export default function addSentry() {
	const script = document.createElement('script');
	script.setAttribute('src', 'https://browser.sentry-cdn.com/5.10.1/bundle.min.js');
	script.setAttribute('crossorigin', 'anonymous');
	script.onload = function sentryLoaded() {
		Sentry.init({ dsn: 'https://44f2844d01464e838fcd730fd5946863@sentry.io/1851265' });
		Sentry.configureScope(function(scope) {
			scope.setTag('page-type', meta('page-type'));
		});
	};
	window.addEventListener('DOMContentLoaded', () => document.body.appendChild(script));
}

function meta(name) {
	const tag = document.querySelector(`meta[name="${name}"]`);

	return tag && tag.content;
}
