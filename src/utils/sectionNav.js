export function pathForId(id) {
  return id === 'top' ? '/' : `/${id}`
}

export function idForPath(pathname) {
  const clean = pathname.replace(/^\/|\/$/g, '')
  return clean === '' ? 'top' : clean
}

export function scrollToId(id, { replace = false, smooth = true } = {}) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
  const path = pathForId(id)
  if (replace) window.history.replaceState(null, '', path)
  else window.history.pushState(null, '', path)
}

export function handleSectionNavClick(event, id) {
  event.preventDefault()
  scrollToId(id)
}
