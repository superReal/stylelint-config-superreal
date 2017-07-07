module.exports = {
    // Stylelint rules
    // http://stylelint.io/user-guide/rules
    rules: {
        /* Color */
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'color-named': 'never',
        'color-no-hex': null,
        'color-no-invalid-hex': true,

        /* Font family */
        'font-family-name-quotes': 'always-where-recommended',
        'font-family-no-duplicate-names': true,

        /* Font weight */
        'font-weight-notation': 'named-where-possible',

        /* Function */
        'function-blacklist': null,
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': null,
        'function-comma-newline-before': null,
        'function-comma-space-after': null,
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': null,
        'function-parentheses-space-inside': null,
        'function-url-data-uris': null,
        'function-url-no-scheme-relative': true,
        'function-url-quotes': null,
        'function-whitelist': null,
        'function-whitespace-after': 'always',

        /* Number */
        'number-leading-zero': 'never',
        'number-max-precision': 3,
        'number-no-trailing-zeros': true,

        /* String */
        'string-no-newline': true,
        'string-quotes': 'single',

        /* Length */
        'length-zero-no-unit': true,

        /* Unit */
        'unit-blacklist': null,
        'unit-case': 'lower',
        'unit-no-unknown': true,
        'unit-whitelist': [
            's',
            'px',
            '%',
            'em',
            'vh',
            'vw',
            'deg',
            'rem',
        ],

        /* Value */
        'value-keyword-case': null,
        'value-no-vendor-prefix': true,

        /* Value list */
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': 0,

        /* Custom property */
        'custom-property-empty-line-before': null,
        'custom-property-pattern': null,

        /* Shorthand property */
        'shorthand-property-no-redundant-values': true,

        /* Property */
        'property-blacklist': null,
        'property-case': 'lower',
        'property-no-unknown': true,
        'property-no-vendor-prefix': true,
        'property-whitelist': null,

        /* Keyframe declaration */
        'keyframe-declaration-no-important': true,

        /* Declaration */
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': null,
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': null,
        'declaration-no-important': null,
        'declaration-property-unit-blacklist': null,
        'declaration-property-unit-whitelist': null,
        'declaration-property-value-blacklist': null,
        'declaration-property-value-whitelist': null,

        /* Declaration block */
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-ignored-properties': null,
        'declaration-block-no-redundant-longhand-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-properties-order': null,
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': null,
        'declaration-block-semicolon-space-after': null,
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',

        /* Block */
        'block-closing-brace-empty-line-before': null,
        'block-closing-brace-newline-after': [
            'always-multi-line',
            {
                ignoreAtRules: [
                    'if',
                    'else',
                ],
            },
        ],
        'block-closing-brace-newline-before': 'always',
        'block-closing-brace-space-after': null,
        'block-closing-brace-space-before': null,
        'block-no-empty': true,
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-newline-before': null,
        'block-opening-brace-space-after': null,
        'block-opening-brace-space-before': 'always',

        /* Selector */
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-blacklist': null,
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-operator-whitelist': null,
        'selector-attribute-quotes': 'never',
        'selector-class-pattern': '^[0-9a-zA-Z_\.\-]+$', // eslint-disable-line
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-id-pattern': '^$',
        'selector-max-compound-selectors': 5,
        'selector-max-specificity': null,
        'selector-nested-pattern': null,
        'selector-no-attribute': null,
        'selector-no-combinator': null,
        'selector-no-qualifying-type': null,
        'selector-no-type': null,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-class-whitelist': null,
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'selector-max-empty-lines': 1,

        /* Selector list */
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': 'always-single-line',
        'selector-list-comma-space-before': 'never',

        /* Rule */
        'rule-nested-empty-line-before': null,
        'rule-non-nested-empty-line-before': null,

        /* Media feature */
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-blacklist': null,
        'media-feature-name-case': 'lower',
        'media-feature-name-no-unknown': true,
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-name-whitelist': null,
        // 'media-feature-parentheses-space-inside': null,
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'never',

        /* Custom media */
        'custom-media-pattern': null,

        /* Media query list */
        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-newline-before': 'never-multi-line',
        'media-query-list-comma-space-after': 'always',
        'media-query-list-comma-space-before': 'never',

        /* At rule */
        'at-rule-blacklist': null,
        'at-rule-empty-line-before': null,
        'at-rule-name-case': 'lower',
        'at-rule-name-newline-after': null,
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-no-unknown': null,
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-whitelist': null,

        /* Stylelint disable */
        'stylelint-disable-reason': null,

        /* Comment */
        'comment-empty-line-before': null,
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',
        'comment-word-blacklist': null,

        /* General / Sheet */
        indentation: [
            4,
            {
                ignore: [
                    'value',
                    'param',
                ],
            },
        ],
        'max-empty-lines': 2,
        'max-line-length': 120,
        'max-nesting-depth': 5,
        'no-browser-hacks': null,
        'no-descending-specificity': true,
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        'no-indistinguishable-colors': null,
        'no-invalid-double-slash-comments': true,
        'no-missing-end-of-source-newline': true,
        'no-unknown-animations': true,
        'no-unsupported-browser-features': null,
    },
};
