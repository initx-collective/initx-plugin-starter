import { InitxHandler, type InitxOptions } from '@initx-plugin/core'
import { log } from '@initx-plugin/utils'

export default class StarterHandler extends InitxHandler {
  matchers = [
    {
      matching: 'start',
      description: 'Plugin starter'
    }
  ]

  async handle(options: InitxOptions, ...others: string[]) {
    log.info('initx-plugin-starter is running 🎊')

    log.info('options')
    console.log(options)

    log.info('others')
    console.log(others)
  }
}
