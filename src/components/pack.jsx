import data from "../packs/packs.json"

export function Drivers() {
    return (
        <>
            {data.map(({ description, title, image, price, redireccion }) => (
                <article
                    class="
                        flex flex-col gap-4 p-2 m-4 md:flex-row md:max-w-[1440px] mx-auto items-center justify-center"
                >
                    <div class="flex flex-col justify-center gap-4 md:p-4 max-w-[440px]">
                        <div class="">
                            <h2 class="text-2xl md:text-4xl font-semibold">{title}</h2>
                        </div>
                        <div>
                            <p class="text-sm md:text-xl text-white/50 text-pretty">
                                {description}
                            </p>
                        </div>
                        <div class="flex justify-around items-center">
                            <p class="text-2xl md:text-4xl font-bold bg-slate-800 px-3 py-1 rounded-2xl shadow-lg shadow-white/10 ">{price}</p>
                            <a href={ redireccion } target="_blank">
                                <button class="transition-background inline-flex h-10 md:h-12 items-center justify-center rounded-md border border-gray-800 bg-gradient-to-r from-gray-100 via-[#c7d2fe] to-[#8678f9] bg-[length:200%_200%] bg-[0%_0%] px-6 md:px-9 font-medium text-gray-950 duration-500 hover:bg-[100%_200%]">
                                    Comprar
                                </button>
                            </a>
                        </div>
                    </div>
                    <picture class="shadow-lg shadow-white/10 rounded-2xl max-w-[300px]">
                        <img
                            class="rounded-2xl"
                            src={image}
                            alt="imagen del pack { image }"
                        />
                    </picture>
                </article>
            ))}
        </>
    )
}