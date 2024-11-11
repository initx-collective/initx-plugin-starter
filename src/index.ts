import { type InitxContext, InitxPlugin } from '@initx-plugin/core'
import { log } from '@initx-plugin/utils'

export default class StarterPlugin extends InitxPlugin {
  matchers = [
    {
      matching: 'start',
      description: 'Plugin starter'
    }
  ]

  async handle(ctx: InitxContext, ...others: string[]) {
    log.info('initx-plugin-starter is running 🎊')

    log.info('ctx')
    console.log(ctx)

    log.info('others')
    console.log(others)
  }
}
