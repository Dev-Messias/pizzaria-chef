import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { api } from "@/services/api";
import { getCookieServer } from "@/lib/cookieServer";
import { redirect } from "next/navigation";

export default function Category() {

    async function handleRegisterCategory(formData: FormData){
        "use server"
        
        const name = formData.get("name")

        if(name === '') return;

        const data = {
            name: name
        }

        const token = getCookieServer();

         await api.post("/category", data, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .catch((err) => {
            console.log(err)
            return;
        })

        redirect("/dashboard")

        
    }

    return (
        <main className='sm:ml-14 p-4' >
            <div className="flex flex-col justify-between max-w-3xl mx-auto" >

                <Card className="mt-10" >
                    <CardHeader>
                        <CardTitle className="font-bold" >Nova Categoria</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <form action={handleRegisterCategory} className="flex flex-col gap-4" >
                            <Input
                                type="text"
                                name="name"
                                placeholder="Nome da categoria, ex: Pizzas"
                                required
                            />

                            <div className='w-full flex flex-col items-center px-10 mt-2 mb-3' >
                                <Button type='submit' className='w-full' >Cadastrar</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}