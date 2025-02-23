import pkg from '../package.json' with { type: 'json' }

import { Router } from '@oak/oak/router'
import { config } from './config.ts'

import { service60s } from './modules/60s.module.ts'
import { serviceBaike } from './modules/baike.module.ts'
import { serviceBili } from './modules/bili.module.ts'
import { serviceBing } from './modules/bing.module.ts'
import { serviceChangYa } from './modules/changya.module.ts'
import { serviceDouyin } from './modules/douyin.module.ts'
import { serviceEpic } from './modules/epic.module.ts'
import { serviceExRate } from './modules/exchange-rate.module.ts'
import { serviceFabing } from './modules/fabing/fabing.module.ts'
import { serviceHitokoto } from './modules/hitokoto/hitokoto.module.ts'
import { serviceIP } from './modules/ip.module.ts'
import { serviceTodayInHistory } from './modules/today-in-history.module.ts'
import { serviceToutiao } from './modules/toutiao.module.ts'
import { serviceWeibo } from './modules/weibo.module.ts'
import { serviceZhihu } from './modules/zhihu.module.ts'
import { serviceDuanzi } from './modules/duanzi/duanzi.module.ts'
import { serviceAnswer } from './modules/answer/answer.module.ts'
import { serviceLuck } from './modules/luck/luck.module.ts'
import { serviceHash } from './modules/hash.module.ts'
import { serviceFanyi } from './modules/fanyi/fanyi.module.ts'
import { serviceOG } from './modules/og.module.ts'

export const rootRouter = new Router()

rootRouter.get('/', (ctx) => {
  ctx.response.headers.set('Content-Type', 'application/json; charset=utf-8')
  ctx.response.body = JSON.stringify(
    {
      author: config.author,
      user_group: config.group,
      github_repo: config.github,
      api_version: pkg.version,
      updated: pkg.updateTime,
      updated_at: new Date(pkg.updateTime).getTime(),
      endpoints: Array.from(appRouter.entries(), ([_, v]) => v.path),
    },
    null,
    2,
  )
})

export const appRouter = new Router({
  prefix: '/v2',
})

appRouter.get('/60s', service60s.handle())
appRouter.get('/baike', serviceBaike.handle())
appRouter.get('/bili', serviceBili.handle())
appRouter.get('/bing', serviceBing.handle())
appRouter.get('/douyin', serviceDouyin.handle())
appRouter.get('/epic', serviceEpic.handle())
appRouter.get('/exchange_rate', serviceExRate.handle())
appRouter.get('/today_in_history', serviceTodayInHistory.handle())
appRouter.get('/toutiao', serviceToutiao.handle())
appRouter.get('/weibo', serviceWeibo.handle())
appRouter.get('/zhihu', serviceZhihu.handle())
appRouter.get('/changya', serviceChangYa.handle())
appRouter.get('/ip', serviceIP.handle())
appRouter.get('/hitokoto', serviceHitokoto.handle())
appRouter.get('/fabing', serviceFabing.handle())
appRouter.get('/duanzi', serviceDuanzi.handle())
appRouter.get('/answer', serviceAnswer.handle())
appRouter.get('/luck', serviceLuck.handle())

appRouter.all('/og', serviceOG.handle())
appRouter.all('/hash', serviceHash.handle())

appRouter.all('/fanyi', serviceFanyi.handle())
appRouter.all('/fanyi/langs', serviceFanyi.langs())
