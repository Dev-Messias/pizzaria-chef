import { Form } from "./components/form";
import {api} from '@/services/api';
import { getCookieServer } from "@/lib/cookieServer";

export default async  function Product() {

    const token = getCookieServer();

    const response = await api.get("/category", {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })



    return (
        <main className='sm:ml-14 p-4' >
            <div className="flex flex-col justify-between max-w-3xl mx-auto" >

                <Form categories={response.data} />
            </div>
        </main>
    )
}