async function start() {
  console.log('start')
  const model = await tf.loadLayersModel('./model/model.json')
  console.log('done')
  console.log(model)
}
start()
