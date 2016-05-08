declare function require(name: string): any

declare namespace __React {
  interface CommonProps {
    children?: __React.ReactNode
    key?: string | number
    ref?: string | ((component: any) => any)
    className?: string | { toString(): string }
    role?: string
  }
}

declare module 'redux-thunk' {
  const thunk: any
  export default thunk
}
