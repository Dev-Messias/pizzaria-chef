import { Sidebar } from "./components/sidebar";
import {OrderProvider} from '@/providers/order'

export default function DashboardLayout({children}: {children: React.ReactNode}){
    return(
        <>
            <Sidebar/>
            <OrderProvider>
            {children}
            </OrderProvider>
        </>
    )
}