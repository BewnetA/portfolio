import {
  Children,
  cloneElement,
  createElement,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react'

function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options.once) observer.disconnect()
        } else if (!options.once) {
          setInView(false)
        }
      },
      {
        rootMargin: options.margin ?? '0px',
        threshold: options.amount ?? 0,
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options.once, options.margin, options.amount])

  return [ref, inView]
}

function mergeMotionStyle(baseStyle, motionStyle, animateStyle) {
  return { ...baseStyle, ...motionStyle, ...animateStyle }
}

function createMotionComponent(tag) {
  const MotionComponent = forwardRef(function MotionComponent(
    {
      children,
      className = '',
      style,
      initial,
      animate,
      exit,
      whileInView,
      whileHover,
      whileTap,
      viewport,
      transition,
      ...props
    },
    forwardedRef,
  ) {
    const [ref, inView] = useInView({
      once: viewport?.once ?? false,
      margin: viewport?.margin,
      amount: viewport?.amount,
    })
    const [hovered, setHovered] = useState(false)
    const [tapped, setTapped] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      const id = requestAnimationFrame(() => setMounted(true))
      return () => cancelAnimationFrame(id)
    }, [])

    const active = inView || (animate && !whileInView)
    const target = hovered && whileHover ? whileHover : tapped && whileTap ? whileTap : null
    const viewTarget = inView && whileInView ? whileInView : null
    const motionTarget = viewTarget ?? (mounted && active ? animate : initial)

    const duration = transition?.duration ?? 0.5
    const delay = transition?.delay ?? 0
    const ease = transition?.ease ?? 'ease-out'

    const motionStyle = {
      transition: `transform ${duration}s ${ease} ${delay}s, opacity ${duration}s ${ease} ${delay}s, box-shadow ${duration}s ${ease} ${delay}s`,
      ...(motionTarget?.opacity !== undefined && { opacity: motionTarget.opacity }),
      ...(motionTarget?.x !== undefined && {
        transform: `translateX(${motionTarget.x}px) translateY(${motionTarget.y ?? 0}px) scale(${motionTarget.scale ?? 1})`,
      }),
      ...(motionTarget?.y !== undefined &&
        motionTarget?.x === undefined && {
          transform: `translateY(${motionTarget.y}px) scale(${motionTarget.scale ?? 1})`,
        }),
      ...(motionTarget?.scale !== undefined &&
        motionTarget?.x === undefined &&
        motionTarget?.y === undefined && {
          transform: `scale(${motionTarget.scale})`,
        }),
      ...target,
    }

    const setRefs = (node) => {
      ref.current = node
      if (typeof forwardedRef === 'function') forwardedRef(node)
      else if (forwardedRef) forwardedRef.current = node
    }

    return createElement(
      tag,
      {
        ref: setRefs,
        className,
        style: mergeMotionStyle(style, motionStyle),
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onMouseDown: () => setTapped(true),
        onMouseUp: () => setTapped(false),
        ...props,
      },
      children,
    )
  })

  MotionComponent.displayName = `motion.${tag}`
  return MotionComponent
}

export const motion = {
  div: createMotionComponent('div'),
  section: createMotionComponent('section'),
  header: createMotionComponent('header'),
  article: createMotionComponent('article'),
  li: createMotionComponent('li'),
  ul: createMotionComponent('ul'),
  p: createMotionComponent('p'),
  span: createMotionComponent('span'),
  a: createMotionComponent('a'),
  button: createMotionComponent('button'),
  form: createMotionComponent('form'),
  h1: createMotionComponent('h1'),
  h2: createMotionComponent('h2'),
  h3: createMotionComponent('h3'),
  h4: createMotionComponent('h4'),
  h5: createMotionComponent('h5'),
}

export function AnimatePresence({ children }) {
  const items = Children.toArray(children).filter(Boolean)
  return items.map((child) =>
    cloneElement(child, {
      key: child.key ?? 'presence',
    }),
  )
}
