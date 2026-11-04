import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { BulmaRoot } from '../../src'
import './document.css'

export type OfficialDocumentController = 'skeleton-cycle' | 'fixed-navbar'

type OfficialDocumentProps = {
  pageId: string
  controllers: readonly OfficialDocumentController[]
  fixedNavbar?: ReactNode
  children: ReactNode
}

const skeletonClasses = ['rb-is-skeleton', 'rb-has-skeleton'] as const

function preserveClasses(node: Element, classes: readonly string[]) {
  const original = classes.filter((name) => node.classList.contains(name))
  return () => {
    node.classList.remove(...classes)
    node.classList.add(...original)
  }
}

function skeletonCycle(article: HTMLElement) {
  let visible = true
  let running = true
  let interval: ReturnType<typeof setInterval> | undefined
  const targets = new Map<Element, Set<(typeof skeletonClasses)[number]>>()
  const controls = new Map<HTMLElement, () => void>()
  const timers = new Map<HTMLElement, () => void>()
  const statuses = new Map<HTMLElement, () => void>()

  const applyTargets = () => {
    for (const [node, classes] of targets)
      for (const name of classes) node.classList.toggle(name, visible)
  }
  const start = () => {
    interval = setInterval(() => {
      visible = !visible
      applyTargets()
    }, 2000)
  }
  const apply = () => {
    for (const name of skeletonClasses) {
      for (const node of article.querySelectorAll(
        `[data-official-example] [data-official-preview] .${name}`,
      )) {
        let classes = targets.get(node)
        if (!classes) {
          classes = new Set()
          targets.set(node, classes)
        }
        classes.add(name)
      }
    }
    applyTargets()
    for (const control of article.querySelectorAll<HTMLElement>(
      '[data-official-control="skeleton-toggle"] #js-toggle-skeleton',
    )) {
      if (controls.has(control)) continue
      const toggle = () => {
        running = !running
        if (interval !== undefined) clearInterval(interval)
        interval = undefined
        if (running) start()
        apply()
      }
      control.addEventListener('click', toggle)
      controls.set(control, () => control.removeEventListener('click', toggle))
    }
    for (const timer of article.querySelectorAll<HTMLElement>(
      '[data-official-control="skeleton-toggle"] [data-official-control-part="timer"]',
    )) {
      if (!timers.has(timer))
        timers.set(timer, preserveClasses(timer, ['is-active']))
      timer.classList.toggle('is-active', running)
    }
    for (const status of article.querySelectorAll<HTMLElement>(
      '[data-official-control="skeleton-toggle"] [data-official-control-part="status"]',
    )) {
      if (!statuses.has(status)) {
        const restore = preserveClasses(status, [
          'is-success',
          'is-danger',
          'is-light',
        ])
        const text = status.textContent
        statuses.set(status, () => {
          restore()
          status.textContent = text
        })
      }
      status.classList.toggle('is-success', running)
      status.classList.toggle('is-danger', !running)
      status.classList.toggle('is-light', !running)
      const text = running ? 'Active' : 'Inactive'
      if (status.textContent !== text) status.textContent = text
    }
  }

  apply()
  start()
  const observer = new MutationObserver(apply)
  observer.observe(article, { childList: true, subtree: true })
  return () => {
    observer.disconnect()
    if (interval !== undefined) clearInterval(interval)
    for (const restore of controls.values()) restore()
    for (const restore of timers.values()) restore()
    for (const restore of statuses.values()) restore()
    for (const [node, classes] of targets) node.classList.add(...classes)
  }
}

function fixedNavbarControl(
  article: HTMLElement,
  setVisible: (visible: boolean) => void,
) {
  let visible = false
  const controls = new Map<HTMLElement, () => void>()
  const labels = new Map<HTMLElement, string | null>()
  const apply = () => {
    const root = article
    if (!root) return
    const control = root.querySelector<HTMLElement>('#navbarFixBottom')
    if (control) {
      if (!controls.has(control)) {
        const restore = preserveClasses(control, [
          'rb-is-link',
          'rb-is-success',
        ])
        const toggle = (event: MouseEvent) => {
          event.preventDefault()
          visible = !visible
          apply()
          setVisible(visible)
        }
        control.addEventListener('click', toggle)
        controls.set(control, () => {
          control.removeEventListener('click', toggle)
          restore()
        })
      }
      control.classList.toggle('rb-is-link', !visible)
      control.classList.toggle('rb-is-success', visible)
    }
    const label = root.querySelector<HTMLElement>('#navbarFixBottomText')
    if (label) {
      if (!labels.has(label)) labels.set(label, label.textContent)
      const text = visible ? 'Hide' : 'Show'
      if (label.textContent !== text) label.textContent = text
    }
  }

  setVisible(false)
  apply()
  const observer = new MutationObserver(apply)
  observer.observe(article, { childList: true, subtree: true })
  return () => {
    observer.disconnect()
    for (const restore of controls.values()) restore()
    for (const [node, text] of labels) node.textContent = text
  }
}

export function OfficialDocument({
  pageId,
  controllers,
  fixedNavbar,
  children,
}: OfficialDocumentProps) {
  const article = useRef<HTMLElement>(null)
  const [navbarVisible, setNavbarVisible] = useState(false)
  const hasSkeleton = controllers.includes('skeleton-cycle')
  const hasNavbar = controllers.includes('fixed-navbar')

  useEffect(() => {
    if (article.current && hasSkeleton) return skeletonCycle(article.current)
  }, [pageId, hasSkeleton])
  useEffect(() => {
    if (article.current && hasNavbar)
      return fixedNavbarControl(article.current, setNavbarVisible)
  }, [pageId, hasNavbar])

  const showNavbar = hasNavbar && navbarVisible
  return (
    <article
      ref={article}
      className="sb-unstyled"
      data-official-document={pageId}
      data-official-navbar-visible={showNavbar ? '' : undefined}
    >
      {children}
      {showNavbar && (
        <BulmaRoot data-official-document-dependency="fixed-navbar">
          {fixedNavbar}
        </BulmaRoot>
      )}
    </article>
  )
}
