import React from 'react'
import { Me } from '../../components/sections/about/Me'
import { Footer } from '../../components/sections/footer/Footer'
import { Portada } from '../../components/sections/portada/Portada'
import { Tecnologies } from '../../components/sections/tecnologies/Tecnologies'
import { Templates } from '../../components/sections/templates/Templates'
import { Websites } from '../../components/sections/websites/Websites'
import { PerfilCard } from '../../components/ui/Cards/perfil/PerfilCard'
import { Contact } from '../../components/ui/Contact'

export const Home = () => {
    return (
        <>
            <Portada />
            <Templates />
            <Tecnologies />
            <Websites />
            <Me />
            <Footer />
            <PerfilCard />
            <Contact />
        </>
    )
}
