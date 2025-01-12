import { type InitxContext, InitxPlugin } from '@initx-plugin/core'
import { log } from '@initx-plugin/utils'

interface Store {
  foo: string
}

export default class StarterPlugin extends InitxPlugin<Store> {
  defaultStore = {
    foo: 'bar'
  }

  rules = [
    {
      matching: 'start',
      description: 'Plugin starter'
    }
  ]

  async handle(ctx: InitxContext<Store>, ...others: string[]) {
    /* eslint-disable no-console */
    log.info('initx-plugin-starter is running 🎊')

    log.info('ctx')
    console.log(ctx)

    log.info('others')
    console.log(others)
  }
}
