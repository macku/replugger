module.exports = {
  use: [
    ['neutrino-preset-react', {

     /* preset options */

      // Example: disable Hot Module Replacement
      hot: false,

      // Example: change the page title
      html: {
        title: 'Epic React App'
      },

      // Add additional Babel plugins, presets, or env options
      babel: {
        // Override options for babel-preset-env
        presets: [
          ['babel-preset-env', {
            // Passing in targets to babel-preset-env will replace them
            // instead of merging them
            targets: {
              browsers: [
                'last 1 Chrome versions',
                'last 1 Firefox versions'
              ]
            }
          }]
        ]
      }
  }
      ],
    'neutrino-preset-jest'

    /*
	['neutrino-preset-node', {
      // Enables Hot Module Replacement. Set to false to disable
      hot: true,

      polyfills: {
        // Enables fast-async polyfill. Set to false to disable
        async: true
      },

      // Add additional Babel plugins, presets, or env options
      babel: {
        // Override options for babel-preset-env, showing defaults:
        presetEnv: {
          targets: {
            node: '6.10',
            modules: false,
            useBuiltIns: true,
            // These are excluded when using polyfills.async. Disabling the async polyfill
            // will remove these from the exclusion list
            exclude: ['transform-regenerator', 'transform-async-to-generator']
          }
        }
      }
    }]
    /*/
  ]
}