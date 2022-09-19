import nunjucksRender from "gulp-nunjucks-render";
// import { htmlValidator } from "gulp-w3c-html-validator";


export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message %>"
        }))
    )
      .pipe(nunjucksRender({
        path:['src/html'],
       }))
        // .pipe(htmlValidator.analyzer())
        // .pipe(htmlValidator.reporter())
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
};
