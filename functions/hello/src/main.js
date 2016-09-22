console.log('starting function')
exports.handle = (e, ctx, cb) => {
  console.log('processing event: %j', e)
  cb(null, { hello: 'world' })
}
