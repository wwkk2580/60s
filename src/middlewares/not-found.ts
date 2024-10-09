import type { Context, Next } from '@oakserver/oak'

export default async function notFound(ctx: Context, next: Next) {
  await next()

  ctx.response.redirect('https://github.com/vikiboss/60s')

  return
}
