
module.exports = (ctx) => {
  ctx.storage.setDomain(ctx.request.body.domain);
  ctx.whistleMgr.restart();
  ctx.body = { ec: 0 };
};