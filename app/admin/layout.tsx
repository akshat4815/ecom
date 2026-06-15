import { AdminLayout } from "@/components/AdminLayout"
import ChildrenInterface from "@/interface/children.interface"
import { FC } from "react"

const layout: FC<ChildrenInterface> = ({children}) => {
  return (
    <AdminLayout>
        {children}
    </AdminLayout>
  )
}

export default layout