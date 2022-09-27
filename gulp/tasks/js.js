import rollup from 'gulp-best-rollup-2';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import rename from "gulp-rename";
import gulpESLintNew from "gulp-eslint-new";



export const jsModules = () => {
	return app.gulp.src(app.path.src.jsModules)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(rollup({
			context: 'this',
			plugins: [
				commonjs(),
				babel({
					babelHelpers: 'bundled',
					exclude: 'node_modules/**',
					configFile: false,
					presets: ['@babel/preset-env'],
				  }),
				  nodeResolve({
					browser: true, // allow to use
				  }),
				  terser({
					format: {
						comments: false,
					  },
					  keep_fnames: false,
					  mangle: {
						toplevel: true,
					  },
				  }),
			],
		},
		{
				format: "es",
		})) 
		.pipe(app.gulp.dest(app.path.build.jsModules))
		.pipe(app.plugins.browsersync.stream());
}

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(gulpESLintNew(
			{
				overrideConfig: {
					env: {
						browser: true,
						commonjs: true,
						es6: true,
					},
					extends: 'eslint:recommended',
					"parserOptions": { 
						"ecmaVersion": 'latest' 
					},
					globals: {
						chrome: 'readonly',
					},
				},
				warnIgnored: true,
				fix: true,
			},
		))     
        .pipe(gulpESLintNew.fix())              
        .pipe(gulpESLintNew.format())           
        .pipe(gulpESLintNew.failAfterError())  
		.pipe(rollup({
			plugins: [
				commonjs(),
				babel({
					babelHelpers: 'bundled',
					exclude: 'node_modules/**',
					configFile: false,
					presets: ['@babel/preset-env'],
				  }),
				  nodeResolve({
					browser: true, // allow to use
				  }),
			],
		},
		{
				format: "es",
		})) 
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(
			app.plugins.if(
				app.isBuild,
				rollup({
					plugins: [
						commonjs(),
						babel({
							babelHelpers: 'bundled',
							exclude: 'node_modules/**',
							configFile: false,
							presets: ['@babel/preset-env'],
						  }),
						  nodeResolve({
							browser: true, // allow to use
						  }),
						  terser(),
					],
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				rename({
					extname: ".min.js"
				})
			)
		)
        .pipe(
			app.plugins.if(
				app.isBuild,
                app.gulp.dest(app.path.build.js)
			)
		)
		.pipe(app.plugins.browsersync.stream());
}