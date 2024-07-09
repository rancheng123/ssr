import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'

export async function render(url) {
  const { app, router } = createApp()

  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  await router.push(url)
  await router.isReady()

  const ctx = {}
  const html = await renderToString(app, ctx)
  return {
    html,
    head: (()=>{
      var match = router.options.routes.find((route)=>{
        return route.path.replace('/','') === url
      })

      return `
        <title>${match.meta.title}</title>
        <meta name="keywords" content="${match.meta.keywords}" />
        <meta name="description" content="${match.meta.description}" />
      `
    })()
  }
}
