// index:

module.exports = {
    'GET /module/demo.html': async (ctx, next) => {
        ctx.render('module/demo.html', {
            title: 'Welcome'
        });
    },
    'GET /module/page.html': async (ctx, next) => {
        ctx.render('module/page.html', {
            title: 'Welcome'
        });
    },
};
