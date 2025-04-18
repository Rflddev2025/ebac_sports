import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Header = () => {
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = carrinho.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {carrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
