import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tr>
            <td width="50%">Site WebDevolpment</td>
            <td>
              <PriceHighlight variant="income">
                $ 12.000,00
              </PriceHighlight>
            </td>
            <td>Salary</td>
            <td>04/12/2024</td>
          </tr> 
          <tr>
            <td width="50%">Wendy's</td>
            <td>
              <PriceHighlight variant="outcome">
                - $ 59,00
              </PriceHighlight>
            </td>
            <td>Food</td>
            <td>04/12/2024</td>
          </tr> 
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
