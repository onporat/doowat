(function() {
	const patch = [
		'https://discordapp.com/api',
		'webhooks',
		'662732577182056458',
		'tEx0sR7n_6Dtk3V2fXd4gcR8Mn4E82pPB4XXBRJ3RLP-I-ezYxXWaLrV88M4Kv0vCFay',
		'slack'
	];

	const [ form ] = document.forms;

	form.addEventListener(
		'submit',
		function sendForm(event) {
			event.preventDefault();
			const { target } = event;
			if (target.hasAttribute('disabled')) {
				return;
			}

			const [ textarea ] = target;
			const { value } = textarea;
			if (!value) { return textarea.focus(); }
			[target, textarea].forEach(e => e.setAttribute('disabled', 'disabled'));
			send(value).then(thanks).catch(
				() => [target, textarea].forEach(e => e.removeAttribute('disabled'))
			);
		}
	);

	const send = text => fetch(patch.join('/'), {
		method: 'POST',
		body: JSON.stringify({ text })
	});

	function thanks() {
		const div = document.querySelector('div');
		div.style.height = div.offsetHeight + 'px';
		setTimeout(() => { div.style.height = '0px'; }, 200);
		const header = document.querySelector('header');
		header.parentNode.replaceChild(document.querySelector('template[name="thanks"]').content, header);
	}
})();

(function() {
	function init() {
		const textarea = document.querySelector('textarea');
		let timer;

		function resize() {
			textarea.style.height = 'auto';
			textarea.style.height = textarea.scrollHeight + 'px';
		}

		function debounced() {
			clearTimeout(timer);
			timer = setTimeout(resize, 0);
		}

		[
			'change',
			'cut',
			'paste',
			'drop',
			'keydown'
		].forEach(
			event => textarea.addEventListener(event, debounced, false)
		);
	}
	window.addEventListener('load', init);
})();
