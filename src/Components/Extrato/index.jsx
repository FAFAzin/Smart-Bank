import React from "react";
import { Box, Botao } from "../UI";

import { extratoLista } from "../../info";
import Items from "../Itens";


export default function Extrato() {
    return (
        <Box>
            {
                extratoLista.updates.map(({ id, type, from, value, date }) => {
                    return <Items key={id} type={type} from={from} value={value} date={date} />
                })
            }
            <Botao>Ver mais</Botao>
        </Box>
    )
}