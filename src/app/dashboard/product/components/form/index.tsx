"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContextMenu, ContextMenuLabel } from "@/components/ui/context-menu"
import { UploadCloud } from "lucide-react"
import { ChangeEvent, useState } from "react"
import Image from "next/image"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { api } from "@/services/api"
import { getCookieClient } from "@/lib/cookieClient";
import { toast } from 'sonner';
import { useRouter } from "next/navigation"

interface CategoryProps{
    id: string;
    name: string;
}

interface Props{
    categories: CategoryProps[];
}

export function Form({categories}: Props) {
    const router = useRouter();
    const [image, setImage] = useState<File>();
    const [previewImage, setPreviewImage] = useState("");

    async function handleRegisterProduct(formData: FormData){
        const category = formData.get("category")
        const name = formData.get("name")
        const price = formData.get("price")
        const description = formData.get("description")

        if(!name || !category || !price || !description || !image ){
            toast.warning("🧐 - Preencha todos os campos!")
            return;
        }

        const data = new FormData();

        data.append("name", name);
        data.append("price", price);
        data.append("description", description);
        data.append("category_id", categories[Number(category)].id);
        data.append("file", image);

        const token = getCookieClient();

        await api.post("/product", data, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .catch((err)=>{
            console.log(err)
            toast.warning("😥 - Falha ao cadastrar esse produto!")
            return;
        })

        toast.success("😊 - Produto registrado com sucesso!")
        router.push("/dashboard")

    }

    function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type !== "image/jpeg" && image.type !== "image/png") {
                toast.warning("🧐 - Formato não permitido!")
                return;
            }

            setImage(image);
            setPreviewImage(URL.createObjectURL(image))


        }
    }


    return (
        <main>
            <Card>
                <CardHeader>
                    <CardTitle>Novo Produto</CardTitle>
                </CardHeader>

                <CardContent  >
                    <form className="w-full flex flex-col gap-4" action={handleRegisterProduct} >
                        <div className="w-full   flex  border-2 border-slate-300 border-dashed p-1 rounded-lg" >
                            <label className="w-full h-72  relative  rounded-lg flex items-center justify-center cursor-pointer flex-col " >
                                <span className="z-50 opacity-80 hover:scale-110 duration-200 " >
                                    <UploadCloud />
                                </span>

                                <input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    required
                                    onChange={handleFile}
                                    className="hidden"

                                />

                                {previewImage && (
                                    <Image
                                        className=" w-full h-full rounded-lg object-cover"
                                        alt="Imagem de preview"
                                        src={previewImage}
                                        fill={true}
                                        quality={100}
                                        priority={true}

                                    />
                                )}
                            </label>
                        </div>
                        <Select name="category" >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Selecione a categoria" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup  >
                                    <SelectLabel>Categorias</SelectLabel>
                                    {categories.map((category, index) =>(
                                        <SelectItem key={category.id} value={index.toString()}>{category.name}</SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Input
                            type="text"
                            name="name"
                            placeholder="Digite o nome do produto..."
                            required
                        />

                        <Input
                            type="text"
                            name="price"
                            placeholder="Preço do produto..."
                            required
                        />
                        <Textarea
                            placeholder="Digite a descrição do produto..."
                            name="description"
                            required
                        />

                        <Button type="submit" >Cadastrar Produto</Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}