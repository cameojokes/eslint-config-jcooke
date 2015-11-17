module.exports = {
	rules: {
		'comma-dangle': 0,
		'id-length': [2, { exceptions: ['_'] }],
		'indent': [2, 'tab', { SwitchCase: 1 }],
		'linebreak-style': [2, 'unix'],
		'no-undef': 2,
		'no-unused-vars': [2, { vars: 'all', args: 'none' }],
		'no-var': 0,
		'quotes': [2, 'single'],
		'vars-on-top': 0
	}
};
