import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import mincss from "gulp-clean-css";
import groupmedia from "gulp-group-css-media-queries";
import autoprefixer from "gulp-autoprefixer";


const sass = gulpSass(dartSass);


export const styles = () => {
	return app.gulp.src(app.path.src.styles, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SCSS",
				message: "Error: <%= error.message %>"
			})))
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(app.gulp.dest(app.path.build.styles))
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 2 versions"],
					cascade: true
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				groupmedia()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				mincss()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				rename({
					extname: ".min.css"
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
                app.gulp.dest(app.path.build.styles)
			)
		)
		.pipe(app.plugins.browsersync.stream());
}
