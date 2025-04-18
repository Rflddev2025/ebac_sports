import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../types/Produto'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho(state, action: PayloadAction<Produto>) {
      state.itens.push(action.payload)
    },
    removerDoCarrinho(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
