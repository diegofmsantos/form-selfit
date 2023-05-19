import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    nome: z.string()
    .nonempty('Digite seu nome.'),
    cpf: z.coerce.number({
        invalid_type_error: 'Digite seu cpf.'
    }).max(11, {message: 'Máximo de 11 caracteres.'}),
    sexo: z.string({
        invalid_type_error: 'Escolha seu sexo.'
    })
    .nonempty('Escolha seu sexo.'),
    nascimento: z.number({
        invalid_type_error: 'Digite sua data de nascimento.'
    }),
    endereco: z.string().nonempty('Digite seu endereço.'),
    numero: z.number({
        invalid_type_error: 'Digite o número.'
    }),
    cidade: z.string().nonempty('Digite sua cidade.'),
    celular: z.number({
        invalid_type_error: 'Digite seu celular.'
    }),
    email: z.string()
    .nonempty('Digite seu e-mail.')
    .email('Formato de e-mail inválido.')
})

type inputs = z.infer<typeof formSchema>

export const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<inputs>({
        resolver: zodResolver(formSchema)
    });
    function formUser(data: any) {
        console.log(data)
    }

    return (
        <div className="w-3/6 h-[580px] bg-red-700 bg-opacity-90 text-center p-2 rounded-[20px] max-[1260px]:mt-60 max-[1260px]:mb-8 max-[1260px]:h-[765px] max-[900px]:h-[800px] max-[900px]:mt-28 max-[425px]:w-[303px] max-[425px]:h-[900px] max-[425px]:mt-60">
            <h2 className="text-4xl text-gray-100 font-bold font-roboto">CADASTRO SELFIT</h2>

            <form onSubmit={handleSubmit(formUser)} autoComplete="off">
                <fieldset className="h-[440px] flex flex-col items-start gap-8 p-4 border border-gray-200 text-left mt-2 mx-2 max-[1260px]:h-[620px] max-[900px]:h-[640px] max-[425px]:w-[260px] max-[425px]:p-3 max-[425px]:h-[720px]">
                    <legend className="text-gray-100 font-semibold">Dados Pessoais</legend>
                    <div className="text-center h-12 max-[1260px]:h-10 max-[1100px]:mb-3">
                        <div className="flex max-[1100px]:flex-col text-start">
                            <label className="text-gray-100 font-bold" htmlFor="nome">Nome Completo:</label>
                            <input className="ml-2 rounded-md bg-gray-100 outline-none px-1 max-[1100px]:ml-0 max-[900px]:w-60"
                                type="text"
                                id="nome"
                                size={40}
                                {...register("nome")}
                            />
                        </div>
                            {errors.nome?.message && <span className="ml-24 text-xs text-yellow-400 max-[1024px]:ml-4 max-[900px]:ml-4">{errors.nome.message}</span>}
                    </div>


                    <div className="flex gap-28 text-gray-100 h-6 max-[1260px]:flex-col max-[1260px]:gap-5 max-[1260px]:mb-16">
                        <div className="flex flex-col max-[1260px]:h-10">
                            <div className="max-[1260px]:h-12">
                                <label className="text-gray-100 font-bold" htmlFor="cpf">CPF:</label>
                                <input className="w-36 ml-2 mr-2 rounded-md bg-gray-100 outline-none px-1 text-black"
                                    type="number"
                                    id="cpf"
                                    {...register("cpf", {valueAsNumber: true})}
                                />
                            </div>
                            {errors.cpf?.message && <span className="text-center ml-8 text-xs text-yellow-400 max-[1260px]:text-start max-[1260px]:ml-16 max-[425px]:mt-1 max-[425px]:ml-12">{errors.cpf?.message}</span>}
                        </div>

                        <div className="flex flex-col text-center h-6 max-[1260px]:h-10">
                            <div className="max-[1260px]:h-12">
                                <label className="text-gray-100 font-bold mr-2" htmlFor="sexo">Sexo:</label>
                                <input className="ml-2 mr-2 rounded-md bg-gray-100 outline-none px-1"
                                    type="radio"
                                    id="sexomasc"
                                    {...register("sexo")}
                                /> Masculino
                                <input className="ml-2 rounded-md bg-gray-100 outline-none px-1"
                                    type="radio"
                                    id="sexofem"
                                    {...register("sexo")}
                                /> Feminino
                            </div>
                            {errors.sexo?.message && <span className="text-xs text-yellow-400 ml-14">{errors.sexo.message}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col text-center h-6 max-[1260px]:h-8 max-[1060px]:h-6 max-[900px]:mb-6 max-[425px]:gap-1">
                        <div className="mb-1 max-[900px]:flex flex-col text-start">
                            <label className="text-gray-100 font-bold" htmlFor="nascimento">Data de Nascimento:</label>
                            <input className="ml-2 rounded-md bg-gray-100 outline-none px-1 max-[900px]:ml-0"
                                type="date"
                                id="nascimento"
                                {...register("nascimento")}
                            />
                        </div>
                        {errors.nascimento?.message && <span className="ml-40 text-xs text-yellow-400 max-[900px]:ml-0">{errors.nascimento.message}</span>}
                    </div>

                    <div className="flex flex-col text-center h-8 mt-2 max-[1260px]:mt-0 max-[900px]:mb-3 max-[425px]:mt-1 max-[425px]:mb-0">
                        <div className="max-[1060px]:flex flex-col items-start justify-start">
                            <label className="text-gray-100 font-bold" htmlFor="endereço">Endereço:</label>
                            <input className="ml-2 rounded-md bg-gray-100 outline-none px-1 max-[1050px]:items-start max-[1060px]:ml-0 max-[900px]:w-60"
                                type="text"
                                id="endereco"
                                size={45}
                                {...register("endereco")}
                            />
                        </div>
                        {errors.endereco?.message && <span className="ml-24 text-xs text-yellow-400 max-[1260px]:ml-6">{errors.endereco.message}</span>}
                    </div>

                    <div className="flex h-6 max-[1260px]:flex-col gap-6 max-[1260px]:h-12 max-[1260px]:mb-10 max-[1060px]:mt-3 max-[425px]:gap-10 max-[425px]:mb-20">
                        <div className="flex flex-col max-[1260px]:h-10">
                            <div className="flex max-[1260px]:h-12">
                                <div>
                                    <label className="text-gray-100 font-bold" htmlFor="numero">Nº:</label>
                                    <input className="ml-2 mr-40 rounded-md bg-gray-100 outline-none px-1 w-20" type="number"
                                        id="numero"
                                        {...register("numero")}
                                    />
                                </div>
                            </div>
                            {errors.numero?.message && <span className="ml-6 text-xs text-yellow-400 max-[425px]:ml-2">{errors.numero.message}</span>}
                        </div>

                        <div className="flex flex-col max-[1260px]:h-10">
                            <div className="flex max-[1260px]:h-12">
                                <div>
                                    <label className="text-gray-100 font-bold" htmlFor="cidade">Cidade:</label>
                                    <input className="ml-2 rounded-md bg-gray-100 outline-none px-1"
                                        type="text"
                                        id="cidade"
                                        autoComplete="off"
                                        {...register("cidade")}
                                    />
                                </div>
                            </div>
                            {errors.cidade?.message && <span className="text-center ml-14 text-xs text-yellow-400 max-[425px]:text-start">{errors.cidade.message}</span>}
                        </div>
                    </div>

                    <div className="flex gap-10 h-6 mt-4 max-[1260px]:flex-col max-[1260px]:gap-6 max-[1260px]:mt-1">
                        <div className="flex flex-col max-[1260px]:h-8">
                                <div className="max-[1260px]:h-12">
                                    <div>
                                        <label className="text-gray-100 font-bold" htmlFor="celular">Celular:</label>
                                        <input className="ml-2 rounded-md bg-gray-100 outline-none px-1"
                                            type="tel"
                                            id="celular"
                                            size={12}
                                            {...register("celular")}
                                        />
                                    </div>
                                </div>
                            {errors.celular?.message && <span className="text-center ml-16 text-xs text-yellow-400 max-[1024px]:text-start max-[425px]:text-start max-[425px]:ml-20">{errors.celular.message}</span>}
                        </div>
                        <div className="flex flex-col text-center h-10">
                            <div className="max-[1260px]:h-12">
                                <div className="max-[425px]:flex flex-col items-start">
                                    <label className="text-gray-100 font-bold" htmlFor="email">E-mail:</label>
                                    <input className="ml-2 rounded-md bg-gray-100 outline-none px-1 max-[800px]:w-48 max-[425px]:ml-0"
                                        type="email"
                                        id="email"
                                        size={30}
                                        {...register("email")}
                                    />
                                </div>
                            </div>
                            {errors.email?.message && <span className="ml-16 text-xs text-yellow-400 max-[425px]:ml-3">{errors.email.message}</span>}
                        </div>
                    </div>

                </fieldset>

                <button className="my-5 border border-gray-200 py-2 px-16 rounded-md text-red-800 bg-gray-100 font-bold text-lg hover:bg-gray-300 hover:text-red-600 hover:border-red-600" type="submit">Enviar</button>

            </form>
        </div>
    )
}