import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

const Container: FC<Props> = ({ children }) => {
  return <section className="px-8 mx-auto max-w-3xl -mb-16">{children}</section>
}

export default Container
