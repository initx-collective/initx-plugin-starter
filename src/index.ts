import { type InitxCtx, InitxHandler } from '@initx-plugin/core'
import { log } from '@initx-plugin/utils'

export default class StarterHandler extends InitxHandler {
  matchers = [
    {
      matching: 'start',
      description: 'Plugin starter'
    }
  ]

  async handle(ctx: InitxCtx, ...others: string[]) {
    log.info('initx-plugin-starter is running 🎊')

    log.info('ctx')
    console.log(ctx)

    log.info('others')
    console.log(others)
  }
}
